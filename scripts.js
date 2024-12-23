const c = (...args) => console.log(...args);

const codes = {
  // '¢': 'cent',
  // '£': 'pound',
  // '¥': 'yen',
  // '€': 'euro',
  // '©': 'copy',
  // '®': 'reg',
  // '<': 'lt',
  // '>': 'gt',
  // '"': 'quot',
  // '“': 'ldquo',
  // '”': 'rdquo',
  // '&': 'amp',
  // '’': 'rsquo',
  // '\'': '#39'
  "–": "ndash",
  "’": "rsquo",
  "&": "amp",
  "“": "ldquo",
  "”": "rdquo",
};

const numberDict = {
  ones: {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    mod: 1,
  },
  tens: {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
    mod: 10,
  },
  hundred: { mod: 100, },
  thousand: { mod: 1000, }
};

const gk = { 0: 'ones', 1: 'tens', 2: 'hundred', 3: 'thousand' };

const alph = 'abcdefghijklmnopqrstuvwxyz';
const alph2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const vowels = 'aeiou';
const vowels2 = 'AEIOU';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const consonants2 = 'BCDFGHJKLMNPQRSTVWXYZ';
const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
  97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
  227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
  283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
  367, 373, 379, 383, 389, 397,
];
const uniqmap = { a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83, x: 89, y: 97, z: 101 };
const romannum = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};
const mod = (n, m) => ((n % m) + m) % m;

const createMatrix = (a, b) => {
  return Array(a).fill().map((_, i) => Array(b).fill().map((__, j) => ''))
}

const modtwo = (a, b) => {
  const r = a % Math.abs(b);
  return b === 0 ? undefined : r + ((r < 0 ? Math.abs(b) : 0) + (b < 0 ? b : 0));
};

const calcTrueMod = (dividend, exponent, modulus) => {
  const base = dividend % modulus;
  const power = (dividend % modulus) ** ((exponent + 3) % 4);
  const result = Math.round(base * power) % modulus;
  return result;
};
const comp = (a, b, i, m) => i < m ? a[i] - b[i] || comp(a, b, i + 1, m) : 0;

// EQUATIONS
const isNum = num => !isNaN(+num);
const gauss = n => n * (n + 1) / 2;
const gaussmod = n => n * (n + 1) * (n + 2) / 6;
// n * (n + 1) * (n + 2) / 6 
const hasNum = (num, target) => String(num).includes(String(target));
const findGCD = (a, b) => b === 0 ? a : findGCD(b, a % b);
const isPerfectSq = n => Math.sqrt(n) === ~~Math.sqrt(n);
const sumOfSquares = n => (n * ((n + 1) * (n * 2 + 1))) / 6;
const triangularLineLength = n => {
  return ~~(Math.sqrt(2 * n + 0.25) - 0.5);
};
const boolToInt = bool => bool | 0;
// --------------------------------------------

// **********************************
// Linear Diophantine, basic example to determine how many 5's and 2's are represented 'k' amount of times in sum 'n'. Only works if GCD of coefficients of 2 variables divides the constant term perfectly.
// countFiveAndTwo(123, 39) --> [24, 15];
const countFiveAndTwo = (n, k) => {
  const k5 = ~~((n - 2 * k) / 3), k2 = ~~((n - 5 * k5) / 2);
  if (k2 < 0 || k5 < 0) return 'Invalid';
  if (k2 * 2 + k5 * 5 !== n) return 'Invalid';
  return [k2, k5];
};

// countFourAndTwo(200, 72) --> [44, 28];
const countFourAndTwo = (n, k) => {
  const k4 = ~~(n / 2) - k;
  const k2 = k - k4;
  return [k2, k4];
};

// **********************************
const sum = arr => arr.reduce((a, v) => a + v, 0);
const mult = arr => arr.reduce((a, v) => a * v, 1);
const getmin = arr => arr.reduce((acc, val) => acc > val ? acc : val, Infinity);
const getmax = arr => arr.reduce((acc, val) => acc > val ? acc : val, -Infinity);
const inorder = arr => arr.every((x, i) => i === 0 || (x > arr[i - 1] || x < arr[i - 1]));

const divide = (a, b) => {
  if (b == 0) return 0;
  if (a == 0) return 0;
  return a * b ** -1;
};

const sumDigits = (k) => {
  let sum = 0;
  if (k <= 0) return 0;
  while (k) {
    sum += k % 10;
    k = k / 10 | 0;
  }
  return sum;
};

const findUniqNumInArr = arr => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
};

function toBinary(k) {
  const intToBin = k => {
    if (k === 0 || k === 1) return k;
    return k % 2 === 0 ? intToBin(k / 2) + '0' : intToBin(~~(k / 2)) + '1';
  };

  const decToBin = k => {
    let i = 0, bin = '';
    for (i = 31; i >= 0; i--) bin += ((k & (1 << i)) != 0) ? '1' : '0';
    return bin;
  };

  switch (true) {
    case k === 0: return '0';
    case k < 0: return intToBin(k >>> 0);
    case k > 0 && k % 1 === 0: return intToBin(k);
    case k > 0 && k % 1 !== 0: return decToBin(k);
    default: return '';
  }
}

const hash = (a) => {
  let m = {};
  for (let v of a) { m[v] = m[v] ? m[v] + 1 : 1; }
  return m;
};

/*
COMPARIING EACH EL IN ARR TO EACH OTHER
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    // comp arr[i], arr[j]
  }
}
*/

// [1, 3, 4, 5, 7, 9, 10] --> '1, 3-5, 7, 9-10'
const paginate = arr => {
  arr.sort((a, b) => a - b);
  let res = [], start = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      res.push([start, arr[i]]);
      start = arr[i + 1];
    }
  }
  return res.map((v) => v[0] === v[1] ? v[0] : `${v[0]}-${v[1]}`).join(', ');
};

const getCallbackParamNames = f => {
  return f.length ? /\(([^()]+)\)/.exec(f.toString().replace(/\s+/g, ''))[1].split(',') : [];
};

// example of using backtracking with map
function find(s) {
  let left = 0, right = 0, max = 0, start = 0;
  let map = new Map();
  while (right < s.length) {
    if (map.size <= 2) {
      map.set(s[right], right);
      right++;
    }
    if (map.size > 2) {
      let min = s.length - 1;
      for (let val of map.values()) {
        min = Math.min(min, val);
      }
      left = min + 1;
      map.delete(s[min]);
    }
    if (right - left > max) {
      max = right - left;
      start = left;
    }
  }

  return s.slice(start, start + max);
}

const divideArray = (arr, k) => {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    if (i + k > arr.length) i = arr.length - k;
    res.push(arr.slice(i, i + k));
    i += k;
  }
  return res;
};

const slidingWindowBasic1 = (arr, k) => {
  let res = [];
  let window = [];
  for (let i = 0; i < arr.length; i++) {
    window.push(arr[i]);
    if (window.length === k) {
      res.push([...window]);
      window.shift();
    }
  }
  return res;
};

// find duplicate in unsorted array: xor operator
// [1, 3, 2, 5, 4, 5, 7, 6], 5
const findDup = (arr) => {
  let dup = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dup = dup ^ arr[i] ^ i;
  }
  return dup;
};

const slidingWindowAlt1 = (arr, n) => {
  let arr = tmp.slice();
  let seen = new Set();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'D') {
      let j = Math.max(i - n, 0);
      let k = Math.min(i + n, arr.length - 1);
      while (j <= k) {
        if (arr[j] === 'C' && !seen.has(j)) {
          count++;
          arr[i] = 'X';
          seen.add(j);
          break;
        }
        j++;
      }
    }
  }
  return count;
};

const removeElementsWithDuplicates = arr => {
  return arr.filter((v, j) => !arr.some((n, i) => j !== i && n === v));
};

const sortHash = hash => {
  return Object.keys(hash).sort().reduce((a, b) => {
    { a[b] = hash[b]; }
    return a;
  }, {});
};

const arrHash = (arr) => {
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = m[arr[i]] ? [...m[arr[i]], i] : [i];
  }
  return m;
};

const extractIdsFromObject = (data) => {
  return (JSON.stringify(data).matchAll(/"id":[0-9]+/gi) || []).map(n => +n[0].match(/\d+/g)[0]);
};

const genPrimeArr = (n) => {
  if (n < 2) return [];
  let arr = [2];
  for (let i = 3; i <= n; i += 2) {
    if (i <= 7) {
      arr.push(i);
      continue;
    }
    let f = true;
    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) {
        f = false;
        break;
      }
    }
    if (f) arr.push(i);
  }
  return arr;
};

const getNumsWith3Divisors = (n, m) => {
  const isPrime = n => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  let h = [];
  let max = m;
  let min = n;
  n = Math.floor(Math.sqrt(Math.sqrt(n)));
  m = Math.floor(Math.sqrt(Math.sqrt(m)));
  while (n <= m) {
    if (isPrime(n)) {
      let r = n ** 4;
      if (r > max) break;
      if (r >= min) {
        h.push(n ** 4);
      }
    }
    n++;
  }
  return h;
};

const divisorsSum = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const addCommasToNum = n => {
  return ('' + n).replace(/.(?=(\d{3})+$)/g, '$&,');
};

// reverse number
const reverseNum = (n, r = 0) => {
  while (n > 0) r = r * 10 + (n % 10), n = ~~(n / 10);
  return r;
};

const reverseNumber = n => {
  let rev = 0, rem = 0;
  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = ~~(n / 10);
  }
  return rev;
};

const countTrailingZerosOfFactorial = n => {
  let zeros = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeros += ~~(n / i);
  }
  return zeros;
};

const factorialfast = n => {
  const ev = n % 2 === 0;
  const max = Math.sqrt(n);
  const inc = ev ? 1 : 2;
  let res = [];
  let start = ev ? 2 : 3;
  for (let i = start; i <= max; i += inc) {
    if (n % i !== 0) continue;
    res.push(i);
    if ((n / i) !== i) res.push(n / i);
  }
  return res;
};

const factorial = n => {
  let fc = 1;
  for (let i = 2; i <= n; i++) {
    fc *= i;
  }
  return fc;
};

const primeFactorSum = n => {
  let sum = 0;
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      sum += i;
      n /= i;
    }
  }
  return n > 1 ? sum + n : sum;
};

const getSignOfNum = (x) => {
  return isNaN(+x) ? NaN : +x == 0 ? 0 : +x < 0 ? -1 : 1;
};

const lengthOfNum = n => ~~Math.log10(Math.abs(n)) + 1;

// is number power of two, power of 2
const isPowerOfTwo = n => Math.log2(n) % 1 === 0;

const isAnagram = w => {
  return w !== w.toLowerCase().split("").sort().join("");
};

const sortAlph = arr => arr.sort((a, b) => a.localeCompare(b));

const sortOddFirst = arr => {
  return arr.sort((a, b) => {
    const [o1, o2] = [~~(a) % 2 !== 0, ~~(b) % 2 !== 0];
    return (o1 && o2) ? a - b : o1 ? -1 : o2 ? 1 : b - a;
  });
};

const convPeriodicFrac = (n, d) => {
  let div = String(~~(n / d));
  let rem = n % d;
  if (rem === 0) return div;
  div += '.';
  let fnd = {};
  let ind = null;
  while (rem !== 0) {
    if (fnd[rem] !== undefined) {
      ind = fnd[rem];
      break;
    }
    fnd[rem] = div.length;
    rem *= 10;
    div += String(~~(rem / d));
    rem %= d;
  }
  if (ind === null) return div;
  return div.slice(0, ind) + '(' + div.slice(ind) + ')';
};

// "abcde" + "cdefgh" => "abcdefgh"
const mergeStrings = (a, b) => {
  let ov = '';
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    ov = (a.slice(a.length - i - 1) === b.slice(0, i + 1)) ? a + b.slice(i + 1) : ov;
  }
  return ov || a + b;
};

// (convertToMixedNumeral('-504/26'), '-19 10/26')
const convertToMixedNumeral = (parm) => {
  const [n, d] = parm.split('/').map(Number);
  const diff = n % d, intg = ~~(n / d);
  return diff === 0 ? String(intg) : (Math.abs(n) < Math.abs(d)) ? `${n}/${d}` : `${intg} ${Math.abs(diff)}/${d}`;
};

const getAvgOfDiaganols = m => {
  let len1 = 0;
  let len2 = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      const curr = m[i][j];
      if (j % 2 !== 0 && i === j && curr >= 0) {
        sum1 += curr;
        len1++;
      }
      else if (j % 2 === 0 && j === m.length - 1 - i && curr < 0) {
        sum2 += curr;
        len2++;
      }
    }
  }
  return [Math.round(sum1 / len1), Math.round(Math.abs(sum2 / len2))].map(v => isNaN(v) ? -1 : v);
};

// [[1,2],[4,4],[5,6,6]] --> 4
const permuteMatrix = arr => {
  return arr.reduce((acc, sub) => acc * sub.reduce((acc, el) => acc.add(el), new Set()).size, 1);
};

const functionComposition = (...fns) => (x) => {
  // https://medium.com/javascript-scene/why-every-react-developer-should-learn-function-composition-23f41d4db3b1
  /*
  const addOne = (a) => a + 1;
  const multTwo = (b) => b * 2;
  const addOneMultTwo = functionComposition(multTwo, addOne)(5); // 12
  */
  return fns.reduceRight((y, f) => f(y), x);
};

// permute, heaps, comb, backtrack
const permuteHeaps = (permutation) => {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};

const permuteArr = arr => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let temp = [];
      for (let k = 0; k < arr.length; k++) {
        temp.push(k === j ? arr[i] : arr[k]);
      }
      res.push(temp);
    }
  }
  return res;
};

const permute = arr => {
  if (arr.length <= 1) return [arr];
  let perms = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let rn = arr.slice(0, i).concat(arr.slice(i + 1));
    let rnp = permute(rn);
    for (let perm of rnp) {
      perms.push([curr].concat(perm));
    }
  }
  return perms;
};

// Match characters between given left and right character
const matchBetween = (left, right, str) => {
  function generateRegex(left, right) {
    return new RegExp(`(?<=${left})(.*?)(?=${right})`, 'g');
  }
  return str.match(generateRegex(left, right));
};

// break str @ every partlength
function splitInParts(s, partLength) {
  return s.match(new RegExp('.{1,' + partLength + '}', 'g')).join('\n');
}

// split but keep the delimiter
function splitKeep(str, delim) {
  let res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delim) {
      res.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  res.push(temp);
  return res;
}

// Split string by delimeter
function splitdel(inputString, leftDelimiter, rightDelimiter) {
  // Escape special characters in the delimiters for use in regex
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create the regular expression
  const regex = new RegExp(`${escapeRegExp(leftDelimiter)}(.*?)${escapeRegExp(rightDelimiter)}`, 'g');

  // Find matches
  const matches = [];
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

const splitArrayEvenOdd = (arr) => {
  return arr.reduce((a, b) => b % 2 === 0 ? { ...a, e: [...a.e, b] } : { ...a, o: [...a.o, b] }, { e: [], o: [] });
};

const splitString = str => {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? [str.slice(0, mid), str.slice(mid)]
    : [str.slice(0, mid + 1), str.slice(mid)];
};

const swapArrElement = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

const swapNestedArrElement = arr => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (i === j) break;
    let temp = arr[i][1];
    arr[i][1] = arr[j][1];
    arr[j][1] = temp;
    i++;
    j--;
  }
  return arr;
};

const swap = (arr, i, k) => [arr[i], arr[k]] = [arr[k], arr[i]];
// find char in nested array
const findchar = (arr, char) => {
  let row = arr.findIndex(sub => sub.includes(char));
  if (!!~row) {
    let col = arr[row].indexOf(char);
    return [row, col];
  }
  return null;
};

const getMatrixProduct = (a, b) => {
  let r1 = a.length;
  let r2 = b.length;
  let c1 = a[0].length;
  let c2 = b[0].length;
  if (c1 !== r2) return null;
  let m = Array(r1);
  for (let r = 0; r < r1; ++r) {
    m[r] = Array(c2);
    for (let c = 0; c < c2; ++c) {
      m[r][c] = 0;
      for (let i = 0; i < c1; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
};

const removeCharFromMatrix = (ma, char) => {
  for (let row = 0; row < ma.length; row++) {
    for (let col = 0; col < ma[row].length; col++) {
      if (ma[row][col] === char) ma[row].shift();
    }
  }
  return ma;
};

const removeDuplicatesInMatrix = arr => {
  return arr.reduce((acc, sub) => {
    if (!acc.some(el => el.join('') === sub.join(''))) {
      acc.push(sub);
    }
    return acc;
  }, []);
};

// call function n number of times
const createIterator = (func, n) => {
  return x => {
    for (let i = 0; i < n; i++) {
      x = func(x);
    };
    return x;
  };
};

// function with state two
const cycle = (...values) => {
  let curr = 0;
  return () => {
    return values[mod(curr++, values.length)];
  };
};

const functionWithState = (function () {
  // ...functionWithState.getState('prop')
  let memo = {};
  return {
    getState: function (prop) {
    },
  };
}());

// get all combinations of multiple arrays
// combineMultArr([arr1, arr2])
const combineMultArr = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head;
  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map(h => `${h}${x}`));
  }, []);
  return combineMultArr([combined, ...tailTail]);
};

// combineObjects({...}, {...})
function combineObjects(...args) {
  if (!args) return {};
  let base = {};
  for (let i = 0; i < args.length; i++) {
    const curr = args[i];
    for (const [k, v] of Object.entries(curr)) {
      base[k] = base[k] ? base[k] + v : v;
    }
  }
  return base;
}

// **********************************
const isLeapYear = y => ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);

const getYearDiff = (start, end = new Date()) => {
  return ~~((
    (end.getTime() + (isLeapYear(end.getFullYear()) ? 864e5 : 0))
    - (start.getTime() + (isLeapYear(start.getFullYear()) ? 864e5 : 0))
  ) / 31536e6);
};

// **********************************
// **********************************
/**
 * get array of values from deeply nested object
 */
const deepVals = obj => {
  if (!obj) return [];
  let data = [];
  let keys = {};
  for (let k in obj) {
    const curr = obj[k];
    if (!keys[k]) {
      keys[k] = curr;
    }
    data = typeof curr === 'object'
      ? [...data, ...deepVals(curr)]
      : [...data, curr];
  }
  return data;
};

const deepReverse = l => {
  if (!Array.isArray(l)) return l;
  return l.map(deepReverse).reverse();
};

/**
 * get array of keys from deeply nested object
 */
const deepKeys = (t, pre = []) => {
  if (Array.isArray(t)) {
    return [];
  } else if (Object(t) === t) {
    return Object.entries(t).flatMap(([k, v]) => deepKeys(v, [...pre, k]));
  } else {
    return pre.join('.');
  }
};

// **********************************
// TWOPOINTERS: aaabba -> a3b2a
function compress(str) {
  if (str.length <= 1) return str;
  let left = 0, right = 0;
  let res = '', last = '';
  while (right < str.length) {
    if (str[right] === last[0] || right === left) {
      last += str[right];
    } else {
      if (last.length) {
        res += last[0] + (last.length > 1 ? last.length : '');
        left += last.length;
        right = left;
        last = str[left];
      }
    }
    right++;
  }
  return res + (last ? last[0] + (last.length > 1 ? last.length : '') : '');
}

// **********************************
// i.e. n = 15 (1^2 + 2^2 + 3^2)
const getNumberOfSquares = n => {
  let a = 1, cnt = 1;
  while (cnt <= n) {
    if ((cnt + (a ** 2)) > n) return a - 1;
    cnt += (a++ ** 2);
  }
  return a - 1;
};

const GCD = (a, b) => !b ? a : GCD(b, a % b);
const LCM = (a, b) => a * b / GCD(a, b);
const lcmRange = (m, n) => {
  return m > n
    ? lcmRange(n, m)
    : Array.from({ length: n - m + 1 }, (_, idx) => m + idx).reduce(LCM);
};
// const gcd = (a, b) => {
//   var R;
//   while ((a % b) > 0) {
//     R = a % b;
//     a = b;
//     b = R;
//   }
//   return b;
// };
// const lcm = (a, b) => {
//   return (a / gcd(a, b) * b);
// };

const smallestCommonFactor = arr => {
  const isPrime = n => {
    for (let i = 2; i <= n ** .5; i++) {
      if (!(n % i)) return false;
    }
    return n > 1;
  };

  const pfs = n => {
    let r = [];
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        r.push(i);
        n /= i;
      }
    }
    if (n > 1) r.push(n);
    return r;
  };

  if (!arr.length) return 1;
  const primeFactors = arr.map(v => isPrime(v) ? [v] : pfs(v));
  for (let i = 0; i < primeFactors.length; i++) {
    for (let j = 0; j < primeFactors[i].length; j++) {
      if (arr.every((v) => v % parseInt(primeFactors[i][j]) === 0)) {
        return parseInt(primeFactors[i][j]);
      }
    }
  }
  return 1;
};

// **********************************
// CURRY AND PARTIAL APPLICATION
function add(n) {
  return function (m) {
    return n + m;
  };
}

// console.log(countdown(-3)(-5)()(+2)(-1)()()(), 
// [3, 7, 6, 3, 3, 2, 1, 0]);
function curryCountdown(times, arr = []) {
  if (times >= 0) {
    arr.push(0);
    return arr;
  }
  arr.push(Math.abs(times++));
  return function hd(ct = 0) {
    if (ct) { times += ct; }

    if (times >= 0) {
      arr.push(0);
      return arr;
    }

    arr.push(Math.abs(times++));
    return hd;
  };
}

// ...wrapInd(26, 40) = 12
const wrapInd = (len, diff) => diff >= 0 ? diff : (Math.abs(diff) <= len) ? len + diff : mod(diff, len);

// **********************************
Array.prototype.flatten = function () {
  const flatten = arr => arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  const res = flatten(this);
  return res;
};

Array.prototype.wrapRemove = function (index, count) {
  if (index + count > this.length) {
    return this.slice(0, index).concat(this.slice(index + count - this.length));
  }
  return this.slice(0, index).concat(this.slice(index + count));
};

Array.prototype.remove = function (index, count) {
  if (index + count > this.length) { count = this.length - index; }
  return this.slice(0, index).concat(this.slice(index + count));
};

Array.prototype.at = function (index) {
  return index < 0 ? this[this.length + index] : this[index];
};

function findSubarrMaxSum(arr) {
  if (arr.length === 0) return [[], 0];
  let maxSum = 0, currentSum = 0;
  let m = {}, currentSumArr = [];

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    currentSumArr.push(arr[i]);
    if (currentSum >= maxSum) {
      maxSum = currentSum;
      let temp = currentSumArr.slice();
      let val = temp;
      if (m[currentSum]) {
        m[currentSum].push(val);
      } else {
        m[currentSum] = [val];
      }
      if (temp[0] + temp[1] === 0) {
        m[currentSum].push(temp.slice(2));
      };
    }
    if (currentSum < 0) {
      currentSum = 0;
      currentSumArr = [];
    }
  }
  if (!maxSum) return 0;
  return m[maxSum];
}

// [1, 2, 3, 2, 1, ...]
// Good alternative to windows
const longestBouncyList = arr => {
  let l = [arr[0]], m = l;
  for (let i = 0; i < arr.length; i++) {
    const prev = l[l.length - 1];
    const tert = l[l.length - 2];
    if (prev !== arr[i] && (l.length === 1 || (prev < tert) !== (arr[i] < prev))) l.push(arr[i]);
    else {
      if (m.length < l.length) m = l;
      if (i && arr[i] !== arr[i - 1]) i--;
      l = [arr[i]];
    }
  }
  return m.length < l.length ? l : m;
};

// Generate subsets, permutations, combinations
const genSubsets = arr => {
  let subs = [[]];
  for (let el of arr) {
    let len = subs.length - 1;
    for (let i = 0; i <= len; i++) {
      subs.push([...subs[i], el]);
    }
  }
  return subs;
};

// finds multiple longest increasing or decreasing subsequence
// << increasing, >> decreasing
const longestComb = (arr, cmd = '<<') => {
  cmd = cmd.replace(/\s/g, '');
  let pot = [], maxLen = 0;
  const stack = [[0, []]];
  while (stack.length > 0) {
    const [k, curr] = stack.pop();
    if (k === arr.length) {
      if (curr.length > 2) {
        if (curr.length > maxLen) {
          maxLen = curr.length;
        }
        pot = [curr, ...pot];
      }
      continue;
    }
    if (
      curr.length === 0
      || (curr[curr.length - 1] < arr[k] && cmd === '<<')
      || (curr[curr.length - 1] > arr[k] && cmd === '>>')
    ) {
      stack.push([k + 1, [...curr, arr[k]]]);
    }
    stack.push([k + 1, curr]);
  }

  if (pot.length === 0) return [];
  const res = pot.filter(el => el.length === maxLen);
  return res.length === 1 ? res[0] : res;
};

const findLongestSubstr = s => {
  let match;
  let index = 0;
  let length = 0;
  let regex = /([a-zA-Z0-9])\1*/g;
  while (match = regex.exec(s)) {
    if (match[0].length > length) {
      length = match[0].length;
      index = match.index;
    }
  }
  return ['' + s.charCodeAt(index), length, [index, index + length - 1]];
};

const largestSubarrayIndex = mtr => {
  let max = -1;
  let ind = -1;
  for (let i = 0; i < mtr.length; i++) {
    if (mtr.length > max) {
      max = mtr.length;
      ind = i;
    }
  }
  return ind;
};

const getIndexOfSpaces = str => {
  return [...str.matchAll(/ /g)].map((a, i) => a.index - i);
};

String.prototype.matchAllPoly = function (regexp, matches = [], match) {
  while ((match = regexp.exec(this)) !== null) matches.push(match);
  return matches;
};

// {
//   "t":["h","r"],
//   "h":"i",
//   "i":["s","s","n"],
//   "s":[" "," ","t"],
//   " ":["i","a","s"],
//   "a":" ",
//   "r":"i",
//   "n":"g",
//   "g":"t"
// }
// 'this is a string'
String.prototype.hashify = function () {
  const m = {};
  for (let l of this) { m[l] = m[l] !== undefined ? [] : ''; }
  for (let i = 1; i <= this.length; i++) {
    const after = i == this.length ? this[0] : this[i];
    if (after) {
      if (typeof m[this[i - 1]] === 'string') m[this[i - 1]] += after;
      else m[this[i - 1]].push(after);
    }
  }
  return m;
};

// v-(l+s)-(t+y)-(c+f)+(b-(n-p)) --> v-l-s-t-y-c-f+b-n+p
const simplifyParenthesesExpression = s => {
  const handleSign = (a, b) => (a === '+' ? 1 : -1) * (b === '+' ? 1 : -1) === 1 ? '+' : '-';
  let str = '';
  let currSign = '+';
  let signs = [currSign];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[+-]/.test(char)) {
      currSign = char;
    }
    else if (/[()]/.test(char)) {
      if (char === '(') {
        signs.push(handleSign(signs[signs.length - 1], currSign));
        currSign = '+';
      }
      else {
        signs.pop();
      }
    }
    else if (/[a-z]/i.test(char)) {
      const nxt = handleSign(signs[signs.length - 1], currSign);
      str += (!str.length && nxt === '+' ? '' : nxt) + char;
      currSign = '+';
    }
  }
  return str;
};

var generateColor = function () {
  const rand = () => ~~(Math.random() * 255);
  let res = 16777216 + rand();
  for (let i = 0, shf = 16; i < 2; i++, shf -= 8) {
    res += rand() << shf;
  }
  return '#' + res.toString(16).slice(1);
};

// **********************************
// yield two generators
function* roundRobin(gen1, gen2) {
  let message;
  let curr = gen1;
  while (true) {
    let nxt = curr.next(message);
    message = yield nxt.value;
    if (curr === gen1) curr = gen2;
    else curr = gen1;
  }
}

// PRIMES GENERATOR
// const stream = Primes.stream();
// let pr = [stream.next().value, stream.next().value];
class Primes {
  static * stream() {
    yield 2;
    var n = 3;
    while (true) {
      if (isPrime(n)) {
        yield n;
      }
      n += 2;
    }
  }
}

// FAST CHECK PRIME
const isPrime = n => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
const isPrime2 = n => {
  for (let i = 2; i <= n ** .5; i++) {
    if (!(n % i)) return false;
  }
  return n > 1;
};
// const isPrime = n => {
//   for (var a = 3; a <= ~~Math.sqrt(n); a += 2) {
//     if (n % a == 0) return false;
//   }
//   return true;
// };

// **********************************
// fastest fib ive tried so far...
// https://www.nayuki.io/page/fast-fibonacci-algorithms
// https://www.nayuki.io/res/fast-fibonacci-algorithms/fastfibonacci.js

function genfib(n) {
  if (n === 0) return [0, 1];
  let [a, b] = genfib(~~(n / 2));
  let c = a * (b * 2 - a);
  let d = a * a + b * b;
  if (n % 2 === 0) {
    return [c, d];
  }
  return [d, c + d];
};

function fibWithMod(n) {
  let mod = 100000;
  if (n === 0) return [0, 1];
  let [a, b] = fibWithMod(Math.floor(n / 2));
  let c = a * (b * 2 - a);
  let d = a * a + b * b;
  if (n % 2 === 0) return [c % mod, d % mod];
  else return [d % mod, (c + d) % mod];
}

const standFib = (n) => {
  let a = 0;
  let b = 1;
  let t;

  while (n > 0) {
    t = b;
    b = b + a;
    a = t;
    n--;
  }
  return a;
};

// memoize the fib above
// let m = [0, 1, 1];
// let last = 3;
// function memoFib(n) {
//   if (n <= 1) return 0;
//   if (m[n]) return m[n];
//   for (let i = last; i <= n; i++) {
//     m[i] = genfib(i)[0];
//   }
//   last = n;
//   return m[n]
// }

// easy fib
// function fibonacci(n) {
//   if (n <= 0) return [];
//   let res = [0, 1]
//   if (n === 1) return [0]
//   if (n === 2) return res;
//   for (let i = 2; i < n; i++) {
//     res.push(res[i - 1] + res[i - 2])
//   }
//   return res;
// }


// **********************************
/*
Funny

---Math.round:
x+.5|0
+x.toFixed()
parseInt(x + 0.5)

---Math.ceil:
x+.999|0

---Math.floor:
x^0
x - (x % 1)
x | 0
(-(-(x) | 0))
~~x

Modulus:
=> b?a-b*(a/b|0):NaN
*/

// BITWISE
const myXOR = (x, y) => (x | y) & (~x | ~y);

const bitadd = (x, y) => {
  x = x.padStart(y.length, '0');
  y = y.padStart(x.length, '0');
  
  let r = '', nc = '0';
  for (let i = x.length - 1; i >= 0; i--) {
    const val = +x[i] + +y[i] + +nc;
    r += ['0', '1', '0', '1'][val];
    nc = ['0', '0', '1', '1'][val];
  }
  return r + (nc !== '0' ? '1' : '');
};

const bitwiseAdd = (x, y) => {
  let crr = x & y;
  let res = x ^ y;
  while (crr !== 0) {
    let tmp = crr << 1;
    crr = res & tmp;
    res = res ^ tmp;
  }
  return res;
};

const bitwiseExponent = (a, n) => {
  let res = 1;
  while (n > 0) {
    let last = n & 1;
    if (last) res = res * a;
    a = a * a;
    n = n >> 1;
  }
  return res;
};

const bitwiseMult = (a, b) => {
  let res = 0;
  while (b > 0) {
    if (b & 1) {
      res = res + a;
    }
    a = a << 1;
    b = b >> 1;
  }
  return res;
};

const bitwiseSubtract = (x, y) => {
  let tempX = x;
  let tempY = y;
  if (x < y) {
    x = y;
    y = tempX;
  }
  while (y != 0) {
    let brr = (~x) & y;
    x = x ^ y;
    y = brr << 1;
  }
  if (tempX < tempY) return -x;
  return x;
};

const isEven = n => !(n & 1);
function swapAdjacentBits(n) {
  let [a, b] = [n & 0xAAAAAAAA, n & 0x55555555];
  a >>= 1;
  b <<= 1;
  return a | b;
}

// "10000000101101111110011001000" --> "01111111010010000001100110111"
const swap1sand0s = x => {
  return x.replace(/\d/g, val => val ^ 1);
};

// **********************************
// OOP magic
class HTMLGen {
  constructor() {
    for (const k of ['a', 'b', 'p', 'body', 'div', 'span', 'title']) {
      this[k] = (str) => this.execTag(k, str);
    }
    this.comment = (str) => this.execComment(str);
  }
  execTag(tag, args) { return `<${tag}>${args}</${tag}>`; }
  execComment(str) { return `<!--${str}-->`; }
}

// **********************************
// **********************************
// **********************************
// **********************************
// **********************************
// STRUCTURES

// remove adjacent duplicates array
const removeAdjacentDup = arr => {
  return arr.filter((i, idx) => arr[idx - i] !== i);
};

// binary search with path implementation
const binarySearch1 = (lst, val) => {
  let path = [];
  let start = 0;
  let end = lst.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    path.push(lst[mid]);
    if (lst[mid] === val) {
      return path;
    }
    if (lst[mid] > val) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return path;
};

/* 
arithmetic progression - get sum of prod within range
- n: constant multiplier
- prog: constant decrement
- min: minimum value for prog

Example:
seq(n: 5, prod: 6, min: 2) ->
(5 * 6) + (5 * 5) + (5 * 4) + (5 * 3) + (5 * 2) = 100
*/
const prog = (n, max, min) => {
  const terms = max - min + 1;
  return (terms / 2) * (2 * n * max - n * (terms - 1));
};

// DETERMINE NUMBER OF POSSIBLE PERMUTES OF ARRAY
function numPerm(arr) {
  let perm = 1;
  for (let i = 1; i <= arr.length; i++) {
    perm *= i;
  }
  return perm;
}

// permute comb
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
};

// https://stackoverflow.com/questions/9960908/permutations-in-javascript?rq=3
// HEAPS PERMUTE
const heapsPermute = (perm) => {
  let len = perm.length;
  let res = [perm.slice()];
  let c = Array(len).fill(0);
  let i = 1;
  let k;
  let p;

  while (i < len) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = perm[i];
      perm[i] = perm[k];
      perm[k] = p;
      ++c[i];
      i = 1;
      res.push(perm.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return res;
};

// DFS : SUBSET : 1
const dfs1 = (nums) => {
  let res = [];
  let dfs = (idx, path) => {
    res.push(path);
    for (let i = idx; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  };
  dfs(0, []);
  return res;
};

// QUEUE, STACK, MONO
const queueMonoIncr = nums => {
  const n = nums.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop();
      ans[idx] = i - idx;
    }
    stack.push(i);
  }
  return ans;
};

// states (statemap): opening, open, closing, closed, paused
// 0: open|closed|paused, 1: opening, -1: closing
class Garage {
  constructor(data) {
    this.doorActions = data;
    this.state = 'closed';
    this.doorPos = 0;
    this.track = [];
    this.obstacle = false;
    this.direction = 1;
  }

  simulate() {
    for (const evt of this.doorActions) this.read(evt);
    return this.track.join('');
  }

  move() {
    const moveMap = {
      'opening': () => {
        this.doorPos < 5 ? this.doorPos++ : (this.state = 'open');
        this.direction = 1;
      },
      'closing': () => {
        this.doorPos > 0 ? this.doorPos-- : (this.state = 'closed');
        this.direction = -1;
      },
      'paused': () => {
        if (this.doorPos === 5 || this.doorPos === 0) {
          this.direction = 0;
        }
      },
      'open': () => { },
      'closed': () => { },
    };
    moveMap[this.state]();
    this.track.push(this.doorPos);
  }

  read(evt) {
    if (evt === 'P' || evt === 'O') {
      this.obstacle = evt === 'O';
      this.toggle();
    }
    this.move();
  }

  toggle() {
    const stateMap = {
      'closed': 'opening',
      'open': 'closing',
      'opening': this.obstacle ? 'closing' : 'paused',
      'closing': this.obstacle ? 'opening' : 'paused',
      'paused': this.direction === 1 ? 'opening' : 'closing',
    };
    this.state = stateMap[this.state];
    this.obstacle = false;
  }
}

// count possible of permutations of matrix;
function countPermsOfMatrix(mtr) {
  const fact = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res = res * i;
    }
    return res;
  };
  const flt = [].concat(...mtr);
  const uniq = [...new Set(flt)];
  return fact(flt.length) / uniq.reduce((acc, val) => acc * fact(flt.filter(x => x === val).length), 1);
}

// c(buildTrie("trie", "trie"), { 't': { 'tr': { 'tri': { 'trie': null } } } });
function buildTrie(...words) {
  let trie = {};
  for (let word of words) {
    let node = trie;
    let str = '';
    for (let char of word) {
      str += char;
      node[str] = node[str] || (str === word ? null : {});
      node = node[str];
    }
  }
  return trie;
}

/*
lazyChain(123456789)
    .invoke('toExponential')
    .invoke('slice', 2, 5)
    .invoke('replace', /3/, 'a')
    .invoke('repeat', 3)
    .value(), '2a42a42a4'

method chaining, chain, lazy eval, 
*/
function lazyChain(arg, calls = []) {
  return {
    curr: arg,
    invoke(method, ...rest) {
      calls.push((curr) => curr[method](...rest));
      return this;
    },
    value() {
      calls.forEach((fn) => {
        this.curr = fn(this.curr);
      });
      return this.curr;
    }
  };
}

/*
compose, chain,
const add1 = function (a) { return a + 1; };
const id = function (a) { return a; };
c(compose(add1, id)(0), 1);
const addAll3 = function (a, b, c) { return a + b + c; };
c(compose(add1, addAll3)(1, 2, 3), 7);
*/
function compose(f, g) {
  return (...x) => f(g(...x));
}

// endless arrays
// stream
// head, tail, Stream and tail() to get the rest of the currentStream without the head
class Stream {
  constructor(start, output, step) {
    this.start = start;
    this.output = output;
    this.step = step;
    return this;
  }
  head() {
    return this.output(this.start);
  }
  tail() {
    return new Stream(
      this.step(this.start),
      this.output,
      this.step,
    );
  }
}
// var increment = function (n) { return n + 1; };
// var id = function (n) { return n; };
// var naturalNumbers = new Stream(0, id, increment);
// c(naturalNumbers.head(), 0);
// c(naturalNumbers.tail().head(), 1);
// c(naturalNumbers.tail().tail().head(), 2);
// var even = function(n) {return n * 2};
// var evenNumbers = new Stream(0, even, increment);
// c(evenNumbers.head(), 0)
// c(evenNumbers.tail().head(), 2)s

const nextMultipleOfFive = n => {
  const poss = [
    '0', '1', '01', '11', '001', '101', '011', '111', '0001', '1001', '0101', '1101', '0011', '1011', '0111', '1111', '00001', '10001', '01001', '11001', '00101', '10101', '01101', '11101', '00011', '10011', '01011', '11011', '00111', '10111', '01111', '11111', '000001', '100001', '010001', '110001', '001001', '101001', '011001', '111001', '000101', '100101', '010101', '110101', '001101', '101101', '011101', '111101', '000111', '100111', '010111', '110111', '001111', '101111', '011111', '111111'
  ];
  if (n <= 2) return 5;
  const bin = n.toString(2);

  for (let i = 0; i < poss.length; i++) {
    const t = parseInt(bin + poss[i], 2);
    if (t % 5 === 0) return t;
  }
  return null;
};

const removeLastDigit = n => {
  return n / 10 | 0;
};

const solveForX = (a, b, x) => {
  return (x - b) / a;
};

class FrequencyNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(node) {
    this.queue.push(node);
    this.queue.sort((a, b) => a.freq - b.freq);
  }
  dequeue() { return this.queue.shift(); }
  isEmpty() { return this.size() === 0; }
  size() { return this.queue.length; }
}
const buildPriorityQueue = (frequencies) => {
  const pq = new PriorityQueue();
  frequencies.forEach(([char, freq]) => pq.enqueue(
    new FrequencyNode(char, freq)
  ));
  while (pq.size() > 1) {
    const left = pq.dequeue();
    const right = pq.dequeue();
    const parent = new Node(
      null,
      left.freq + right.freq,
      left,
      right,
    );
    pq.enqueue(parent);
  }
  return pq.dequeue();
};

const rotateArrayLeft = (arr) => {
  arr.push(arr.shift());
  return arr.join('');
};

const transposeMatrix = (m) => {
  return m[0].map((_, i) => {
    return m.map((__, r) => m[r][i]);
  });
};

/*
variance and stdDeviation
*/
const calcVariance = (data) => {
  const getmean = (data) =>
    data.reduce((a, b) => a + b, 0) / data.length;
  const mean = getmean(data);
  const vari = getmean(data.map(n => Math.pow((n - mean), 2)));
  const stdvar = Math.sqrt(vari);
  return {
    variance: vari,
    stdDeviation: stdvar,
  };
};

/*
get promise state
fulfilled
pending
rejected
*/
function getPromiseState(promise) {
  return new Promise(resolve => {
    promise.then(() => resolve("fulfilled"), () => resolve("rejected"));
    queueMicrotask(() => resolve("pending"));
  });
}

/*
memo works w any type and any length of function arguments
*/
const cbMemo = fn => {
  const obj = { map: new Map };
  return (...args) => {
    let current = obj;
    args.forEach(arg => {
      if (!current.map.has(arg)) current.map.set(arg, { map: new Map });
      current = current.map.get(arg);
    });
    return current.hasOwnProperty(`res`) ? current.res : current.res = fn(...args);
  };
};


// n = depth
// pascal triangle
// pascal matrix
const pascal = (n) => {
  let mtr = Array(n).fill().map((_, i) => Array(i + 1).fill().map((__, j) => (j === 0 || j === i) ? 1 : (j + 1 === i || j === 1) ? i : 0));
  let prev = [];
  for (let i = 3; i < n; i++) {
    for (let k = 1; k < i; k++) {
      if (mtr[i][k] === 0) mtr[i][k] = prev.shift();
    }
    for (let j = 1; j < i; j++) {
      if (mtr[i][j + 1] !== 1) prev.push(mtr[i][j] + mtr[i][j + 1]);
    }
  }
  return mtr;
};

// object search and replace
// recursive flat, search, in place, dynamic
const replaceObjectValueInPlace = (data, repl) => {
  if (data === undefined || repl === undefined) return data;
  for (let [k, v] of Object.entries(data)) {
    if (v === 'dynamic') {
      data[k] = repl;
    } else {
      if (Array.isArray(v)) {
        data[k] = v.map(e => {
          if (typeof e === 'object' && e !== null) {
            return replaceObjectValueInPlace(e, repl);
          }
          return e === 'dynamic' ? repl : e;
        });
      } else if (typeof v === 'object' && v !== null) {
        data[k] = replaceObjectValueInPlace(v, repl);
      }
    }
  }
  return data;
};

// add depth to each layer of object
// recursion
function recordDepth(tree, depth = 0) {
  if (typeof tree === 'object' && !Array.isArray(tree) && tree !== null) {
    if (Object.keys(tree).length === 0) return { depth: 0 };
    for (let [k, v] of Object.entries(tree)) {
      if (typeof v === 'object' && !Array.isArray(v)) {
        tree[k] = { ...recordDepth(v, depth + 1), depth: depth + 1 };
      } else {
        tree.depth = depth;
      }
    }
    return tree;
  }
  return null;
}

const objectDepthCount = (obj) => {
  const isobj = obj => typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
  if (isobj(obj)) {
    let mx = 0;
    const rn = (obj, cnt) => {
      for (const key in obj) {
        if (isobj(obj[key])) {
          rn(obj[key], cnt + 1);
        } else {
          mx = Math.max(mx, cnt);
        }
      }
    };
    rn(obj, 1);
    return mx;
  }
  return 0;
};

const countAllStrInstancesInObj = obj => {
  let res = 0;
  const rnd = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        res++;
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        rnd(obj[key]);
      }
    };
  };
  rnd(obj);
  return res;
};

// Chainable custom methods that work with whatever arguments and native methods
const magicArray = (...args) => {
  return new Proxy(args, {
    get: function(target, prop) {
      if (prop in fn || typeof target[prop] === 'function') {
        return function(...args) {
          const method = prop in fn ? fn[prop] : target[prop];
          const result = method.apply(target, args);
          return Array.isArray(result) ? magicArray(...result) : result;
        };
      }
      return target[prop];
    }
  });
};
const magicFunction = {
  getFiltered: function(predicate) {
    return this.filter(predicate);
  },
  getRejected: function(predicate) {
    return this.filter(e => !predicate(e));
  },
  getSplit: function(predicate) {
    return {
      pass: magicArray(...this.filter(predicate)),
      fail: magicArray(...this.filter(e => !predicate(e))),
    };
  },
  double: function() {
    return magicArray(...this, ...this);
  },
  multiply: function(n) {
    return this.filter(e => typeof e === 'number').map(e => e * n);
  },
  count: function() {
    return this.length;
  },
  first: function() {
    return this.slice(0, 1);
  },
  last: function() {
    return this.slice(-1);
  },
  eq: function(n) {
    return this.slice(n, n + 1);
  }
};

// const arr = proxyArr(arr);
const proxyArr = arr => {
  const handler = {
    get(target, prop, receiver) {
      if (typeof prop === 'string' && !Number.isNaN(Number(prop))) {
        prop = +prop < 0 ? target.length + +prop : +prop;
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      if (typeof prop === 'string' && !Number.isNaN(Number(prop))) {
        prop = +prop < 0 ? target.length + +prop : +prop;
        if (prop < 0) throw Error('');
      }
      return Reflect.set(target, prop, value, receiver);
    }
  };
  return new Proxy(arr, handler);
}
