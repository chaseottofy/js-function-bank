const fs = require('fs').promises;
const path = require('path');
const { parse } = require('@babel/parser');

async function extractCodeSnippet(code, startLine, identifier) {
  const lines = code.split('\n');
  let snippet = [];
  let braceCount = 0;
  let parenCount = 0;
  let started = false;
  let lineCount = 0;

  for (let i = startLine - 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(identifier)) {
      started = true;
    }

    if (started) {
      snippet.push(line);
      lineCount++;

      parenCount += (line.match(/\(/g) || []).length;
      parenCount -= (line.match(/\)/g) || []).length;
      braceCount += (line.match(/{/g) || []).length;
      braceCount -= (line.match(/}/g) || []).length;

      if (line.includes(';') && parenCount === 0 && braceCount === 0 && !line.includes('{')) {
        break;
      }
      if (braceCount === 0 && parenCount === 0 && lineCount > 1 &&
        (line.includes('}') || line.includes(';'))) {
        break;
      }
      if (lineCount > 100) {
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
    const line = lines[i];
    const declarationPattern = new RegExp(`(function\\s+${identifier}|const\\s+${identifier}\\s*=|class\\s+${identifier})`);
    if (declarationPattern.test(line)) {
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
  return `### ${identifier} **[→ Line ${info.lineNumber}](./${fileName}#L${info.lineNumber})**

\`\`\`javascript
${info.snippet}
\`\`\`
`;
}

async function extractGlobalDeclarations(filePath) {
  try {
    const code = await fs.readFile(filePath, 'utf-8');
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });

    const declarations = [];
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
                if (declaration.init.type === 'FunctionExpression' ||
                  declaration.init.type === 'ArrowFunctionExpression') {
                  if (declaration.id && declaration.id.type === 'Identifier') {
                    identifier = declaration.id.name;
                    declarations.push(identifier);
                  }
                } else if (declaration.init.type === 'ClassExpression') {
                  if (declaration.id && declaration.id.type === 'Identifier') {
                    identifier = declaration.id.name;
                    declarations.push(identifier);
                  }
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

    const uniqueDeclarations = [...new Set(declarations)]
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    let readmeContent = `# ${path.basename(filePath)} Documentation\n\n`;
    readmeContent += '## Quick Index\n\n';

    for (const declaration of uniqueDeclarations) {
      const info = await findDeclarationInfo(code, declaration);
      readmeContent += `- [${declaration}](#${declaration.toLowerCase()}) (Line ${info.lineNumber})\n`;
    }

    readmeContent += '\n## Detailed Documentation\n\n';
    for (const declaration of uniqueDeclarations) {
      const info = await findDeclarationInfo(code, declaration);
      const section = await generateMarkdownSection(declaration, info, filePath);
      readmeContent += section + '\n';
    }

    // write
    const readmePath = path.join(path.dirname(filePath), 'README.md');
    await fs.writeFile(readmePath, readmeContent);

    console.log(`Successfully created detailed README.md with ${uniqueDeclarations.length} declarations`);
    return uniqueDeclarations;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Please provide a file path as an argument');
  process.exit(1);
}

extractGlobalDeclarations(inputFile).catch(error => {
  console.error('Failed to extract declarations:', error);
  process.exit(1);
});
