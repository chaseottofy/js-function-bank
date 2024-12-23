const fs = require('fs').promises;
const path = require('path');
const { parse } = require('@babel/parser');

async function extractCodeSnippet(code, startLine, identifier) {
  const lines = code.split('\n');
  let snippet = [];
  let braceCount = 0;
  let started = false;
  let lineCount = 0;

  // Look through lines starting at the function declaration
  for (let i = startLine - 1; i < lines.length; i++) {
    const line = lines[i];

    // Start collecting when we find the function declaration
    if (line.includes(identifier)) {
      started = true;
    }

    if (started) {
      snippet.push(line);
      lineCount++;

      // Count braces to determine function boundaries
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;

      // If braces are balanced and we've started collecting, we're done
      if (braceCount === 0 && lineCount > 1) {
        break;
      }

      // Safety check - don't collect too many lines
      if (lineCount > 20) {
        snippet.push('  ...');
        break;
      }
    }
  }

  return snippet.join('\n');
}

async function findDeclarationInfo(code, identifier) {
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`function ${identifier}`) ||
      lines[i].includes(`const ${identifier}`) ||
      lines[i].includes(`class ${identifier}`)) {
      return {
        lineNumber: i + 1,
        snippet: await extractCodeSnippet(code, i + 1, identifier)
      };
    }
  }
  return { lineNumber: 1, snippet: 'Code not found' };
}

async function generateMarkdownSection(identifier, info, filePath) {
  const fileName = path.basename(filePath);
  return `### ${identifier}

**[→ Line ${info.lineNumber}](./${fileName}#L${info.lineNumber})**

\`\`\`javascript
${info.snippet}
\`\`\`
`;
}

async function extractGlobalDeclarations(filePath) {
  try {
    // Read the source file
    const code = await fs.readFile(filePath, 'utf-8');

    // Parse the code into an AST
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });

    let declarations = [];

    // Walk through the AST to find global declarations
    for (const node of ast.program.body) {
      let identifier;

      switch (node.type) {
        case 'FunctionDeclaration':
          identifier = node.id.name;
          break;

        case 'VariableDeclaration':
          if (node.declarations) {
            for (const declaration of node.declarations) {
              if (declaration.init) {
                // Check for function expressions
                if (declaration.init.type === 'FunctionExpression' ||
                  declaration.init.type === 'ArrowFunctionExpression') {
                  identifier = declaration.id.name;
                  declarations.push(identifier);
                } else if (declaration.init.type === 'ClassExpression') {
                  identifier = declaration.id.name;
                  declarations.push(identifier);
                }
              }
            }
          }
          break;

        case 'ClassDeclaration':
          identifier = node.id.name;
          break;
      }

      if (identifier) {
        declarations.push(identifier);
      }
    }

    // Sort declarations alphabetically
    declarations = [...new Set(declarations)].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    // Generate README content
    let readmeContent = `# ${path.basename(filePath)} Documentation\n\n`;
    readmeContent += '## Quick Index\n\n';

    // First create a quick index
    for (const declaration of declarations) {
      const info = await findDeclarationInfo(code, declaration);
      readmeContent += `- [${declaration}](#${declaration.toLowerCase()}) (Line ${info.lineNumber})\n`;
    }

    // Then add detailed sections
    readmeContent += '\n## Detailed Documentation\n\n';
    for (const declaration of declarations) {
      const info = await findDeclarationInfo(code, declaration);
      const section = await generateMarkdownSection(declaration, info, filePath);
      readmeContent += section + '\n';
    }

    // Write results to README.md
    const readmePath = path.join(path.dirname(filePath), 'README.md');
    await fs.writeFile(readmePath, readmeContent);

    console.log(`Successfully created detailed README.md with ${declarations.length} declarations`);
    return declarations;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Check if a file path was provided as a command line argument
const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Please provide a file path as an argument');
  process.exit(1);
}

// Run the extractor
extractGlobalDeclarations(inputFile).catch(error => {
  console.error('Failed to extract declarations:', error);
  process.exit(1);
});
