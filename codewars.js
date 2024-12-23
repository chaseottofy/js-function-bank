const mod = (n, m) => ((n % m) + m) % m;

const isNum = (num) => !isNaN(+num);

const gauss = (n) => n * (n + 1) / 2;

const gaussmod = (n) => n * (n + 1) * (n + 2) / 6;

const hasNum = (num, target) => String(num).includes(String(target)); // n * (n + 1) * (n + 2) / 6

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

const isPerfectSq = (n) => Math.sqrt(n) === Math.trunc(Math.sqrt(n));

const sumOfSquares = (n) => (n * ((n + 1) * (n * 2 + 1))) / 6;

const triangularLineLength = (n) => Math.trunc(Math.sqrt(2 * n + 0.25) - 0.5);

const boolToInt = (bool) => bool | 0;

const isEven = (n) => !(n & 1);

const isLeapYear = (y) => ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);

const sum = (arr) => arr.reduce((a, v) => a + v, 0);

const mult = (arr) => arr.reduce((a, v) => a * v, 1);

const getmin = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), Infinity);

const getmax = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), -Infinity);

const divide = (a, b) => (b === 0 ? 0 : (a === 0 ? 0 : a * b ** -1));

const inorder = (arr) => arr.every((x, i) => i === 0 || (x > arr[i - 1] || x < arr[i - 1]));

const removeLastDigit = (n) => n / 10 | 0;

const solveForX = (a, b, x) => (x - b) / a;

const transposeMatrix = (m) => m[0].map((_, i) => m.map((__, r) => m[r][i]));

const createMatrix = (a, b) => new Array(a).fill().map((_, i) => new Array(b).fill().map((__, j) => ''));

const addCommasToNum = (n) => {
  return (`${n}`).replaceAll(/.(?=(\d{3})+$)/g, '$&,');
};

const getSignOfNum = (x) => {
  return (isNaN(+x) ? Number.NaN : +x == 0 ? 0 : +x < 0 ? -1 : 1);
};

const lengthOfNum = (n) => Math.trunc(Math.log10(Math.abs(n))) + 1;

const mathRound1 = (x) => x + 0.5 | 0;

const mathRound2 = (x) => +x.toFixed(0);

const mathRound3 = (x) => Number.parseInt(x + 0.5);

const mathCeil1 = (x) => x + 0.999 | 0;

const mathFloor1 = (x) => Math.trunc(x);

const mathFloor2 = (x) => x - (x % 1);

const mathFloor3 = (x) => x | 0;

const mathFloor4 = (x) => (-(-(x) | 0));

const bitMod1 = (a, b) => (b ? a - b * (a / b | 0) : Number.NaN);

const myXOR = (x, y) => (x | y) & (~x | ~y);

const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0; // is number power of two, power of 2

const isAnagram = (w) => w !== w.toLowerCase().split('').sort().join('');

const sortAlph = (arr) => arr.sort((a, b) => a.localeCompare(b));

const comp = (a, b, i, m) => (i < m ? a[i] - b[i] || comp(a, b, i + 1, m) : 0);

const GCD = (a, b) => (b ? GCD(b, a % b) : a);

const LCM = (a, b) => a * b / GCD(a, b);

const getIndexOfSpaces = (str) => [...str.matchAll(/ /g)].map((a, i) => a.index - i);

const splitArrayEvenOdd = (arr) => {
  return arr.reduce((a, b) => (b % 2 === 0 ? { ...a, e: [...a.e, b] } : { ...a, o: [...a.o, b] }), { e: [], o: [] });
};

const getCallbackParamNames = (f) => {
  return (f.length > 0 ? /\(([^()]+)\)/.exec(f.toString().replaceAll(/\s+/g, ''))[1].split(',') : []);
};

const removeAdjacentDup = (arr) => arr.filter((i, idx) => arr[idx - i] !== i); // remove adjacent duplicates array

const extractIdsFromObject = (data) => (JSON.stringify(data).matchAll(/"id":\d+/gi) || []).map((n) => +n[0].match(/\d+/g)[0]);

const removeElementsWithDuplicates = (arr) => arr.filter((v, j) => !arr.some((n, i) => j !== i && n === v));

const swap1sand0s = (x) => x.replaceAll(/\d/g, (val) => val ^ 1); // "10000000101101111110011001000" --> "01111111010010000001100110111"

const permuteMatrix = (arr) => arr.reduce((acc, sub) => acc * sub.reduce((acc, el) => acc.add(el), new Set()).size, 1); // [[1,2],[4,4],[5,6,6]] --> 4

const swap = (arr, i, k) => [arr[i], arr[k]] = [arr[k], arr[i]];

const wrapInd = (len, diff) => (diff >= 0 ? diff : ((Math.abs(diff) <= len) ? len + diff : mod(diff, len))); // ...wrapInd(26, 40) = 12

const functionComposition = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const sortHash = (hash) => {
  return Object.keys(hash).sort().reduce((a, b) => {
    { a[b] = hash[b]; }
    return a;
  }, {});
};

const modtwo = (a, b) => {
  const r = a % Math.abs(b);
  return b === 0 ? undefined : r + ((r < 0 ? Math.abs(b) : 0) + (Math.min(b, 0)));
};

const calcTrueMod = (dividend, exponent, modulus) => {
  const base = dividend % modulus;
  const power = (dividend % modulus) ** ((exponent + 3) % 4);
  const result = Math.round(base * power) % modulus;
  return result;
};

const countFiveAndTwo = (n, k) => {
  // Linear Diophantine, basic example to determine how many 5's and 2's are represented 'k' amount of times in sum 'n'. Only works if GCD of coefficients of 2 variables divides the constant term perfectly.
  // countFiveAndTwo(123, 39) --> [24, 15];
  const k5 = Math.trunc((n - 2 * k) / 3);
  const k2 = Math.trunc((n - 5 * k5) / 2);
  if (k2 < 0 || k5 < 0) return 'Invalid';
  if (k2 * 2 + k5 * 5 !== n) return 'Invalid';
  return [k2, k5];
};

const countFourAndTwo = (n, k) => {
  // countFourAndTwo(200, 72) --> [44, 28];
  const k4 = Math.trunc(n / 2) - k;
  const k2 = k - k4;
  return [k2, k4];
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

const findUniqNumInArr = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i];
  }
  return res;
};

const toBinary = (k) => {
  const intToBin = (k) => {
    if (k === 0 || k === 1) return k;
    return k % 2 === 0 ? `${intToBin(k / 2)}0` : `${intToBin(Math.trunc(k / 2))}1`;
  };

  const decToBin = (k) => {
    let i = 0; let
      bin = '';
    for (i = 31; i >= 0; i--) bin += ((k & (1 << i)) == 0) ? '0' : '1';
    return bin;
  };

  switch (true) {
    case k === 0: {
      return '0';
    }
    case k < 0: {
      return intToBin(k >>> 0);
    }
    case k > 0 && k % 1 === 0: {
      return intToBin(k);
    }
    case k > 0 && k % 1 !== 0: {
      return decToBin(k);
    }
    default: {
      return '';
    }
  }
};

const hash = (a) => {
  const m = {};
  for (const v of a) { m[v] = m[v] ? m[v] + 1 : 1; }
  return m;
};

const paginate = (arr) => {
  // [1, 3, 4, 5, 7, 9, 10] --> '1, 3-5, 7, 9-10'
  arr.sort((a, b) => a - b);
  const res = [];
  let start = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      res.push([start, arr[i]]);
      start = arr[i + 1];
    }
  }
  return res.map((v) => (v[0] === v[1] ? v[0] : `${v[0]}-${v[1]}`)).join(', ');
};

const find = (s) => {
  let left = 0; let right = 0; let max = 0; let
    start = 0;
  const map = new Map();
  while (right < s.length) {
    if (map.size <= 2) {
      map.set(s[right], right);
      right++;
    }
    if (map.size > 2) {
      let min = s.length - 1;
      for (const val of map.values()) {
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
};

const divideArray = (arr, k) => {
  const res = [];
  let i = 0;
  while (i < arr.length) {
    if (i + k > arr.length) i = arr.length - k;
    res.push(arr.slice(i, i + k));
    i += k;
  }
  return res;
};

const slidingWindowBasic1 = (arr, k) => {
  const res = [];
  const window = [];
  for (let i = 0; i < arr.length; i++) {
    window.push(arr[i]);
    if (window.length === k) {
      res.push([...window]);
      window.shift();
    }
  }
  return res;
};

const findDup = (arr) => {
  // find duplicate in unsorted array: xor operator
  // [1, 3, 2, 5, 4, 5, 7, 6], 5
  let dup = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dup = dup ^ arr[i] ^ i;
  }
  return dup;
};

const arrHash = (arr) => {
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = m[arr[i]] ? [...m[arr[i]], i] : [i];
  }
  return m;
};

const genPrimeArr = (n) => {
  if (n < 2) return [];
  const arr = [2];
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
  const isPrime = (np) => {
    if (np < 2) return false;
    if (np === 2) return true;
    if (np % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(np); i += 2) {
      if (np % i === 0) return false;
    }
    return true;
  };
  const h = [];
  const max = m;
  const min = n;
  n = Math.floor(Math.sqrt(Math.sqrt(n)));
  m = Math.floor(Math.sqrt(Math.sqrt(m)));
  while (n <= m) {
    if (isPrime(n)) {
      const r = n ** 4;
      if (r > max) break;
      if (r >= min) {
        h.push(n ** 4);
      }
    }
    n++;
  }
  return h;
};

const divisorsSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const reverseNum = (n, r = 0) => {
  while (n > 0) r = r * 10 + (n % 10), n = Math.trunc(n / 10);
  return r;
};

const reverseNumber = (n) => {
  let rev = 0; let
    rem = 0;
  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.trunc(n / 10);
  }
  return rev;
};

const countTrailingZerosOfFactorial = (n) => {
  let zeros = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeros += Math.trunc(n / i);
  }
  return zeros;
};

const factorialfast = (n) => {
  const ev = n % 2 === 0;
  const max = Math.sqrt(n);
  const inc = ev ? 1 : 2;
  const res = [];
  const start = ev ? 2 : 3;
  for (let i = start; i <= max; i += inc) {
    if (n % i !== 0) continue;
    res.push(i);
    if ((n / i) !== i) res.push(n / i);
  }
  return res;
};

const factorial = (n) => {
  let fc = 1;
  for (let i = 2; i <= n; i++) {
    fc *= i;
  }
  return fc;
};

const primeFactorSum = (n) => {
  let sum = 0;
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      sum += i;
      n /= i;
    }
  }
  return n > 1 ? sum + n : sum;
};

const sortOddFirst = (arr) => {
  return arr.sort((a, b) => {
    const [o1, o2] = [Math.trunc(a) % 2 !== 0, Math.trunc(b) % 2 !== 0];
    return (o1 && o2) ? a - b : o1 ? -1 : o2 ? 1 : b - a;
  });
};

const convPeriodicFrac = (n, d) => {
  let div = String(Math.trunc(n / d));
  let rem = n % d;
  if (rem === 0) return div;
  div += '.';
  const fnd = {};
  let ind = null;
  while (rem !== 0) {
    if (fnd[rem] !== undefined) {
      ind = fnd[rem];
      break;
    }
    fnd[rem] = div.length;
    rem *= 10;
    div += String(Math.trunc(rem / d));
    rem %= d;
  }
  if (ind === null) return div;
  return `${div.slice(0, ind)}(${div.slice(ind)})`;
};

const mergeStrings = (a, b) => {
  // "abcde" + "cdefgh" => "abcdefgh"
  let ov = '';
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    ov = (a.slice(a.length - i - 1) === b.slice(0, i + 1)) ? a + b.slice(i + 1) : ov;
  }
  return ov || a + b;
};

const convertToMixedNumeral = (parm) => {
  // (convertToMixedNumeral('-504/26'), '-19 10/26')
  const [n, d] = parm.split('/').map(Number);
  const diff = n % d; const
    intg = Math.trunc(n / d);
  return diff === 0 ? String(intg) : ((Math.abs(n) < Math.abs(d)) ? `${n}/${d}` : `${intg} ${Math.abs(diff)}/${d}`);
};

const getAvgOfDiaganols = (m) => {
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
      } else if (j % 2 === 0 && j === m.length - 1 - i && curr < 0) {
        sum2 += curr;
        len2++;
      }
    }
  }
  return [Math.round(sum1 / len1), Math.round(Math.abs(sum2 / len2))].map((v) => (isNaN(v) ? -1 : v));
};

const permuteHeaps = (permutation) => {
  // permute, heaps, comb, backtrack
  const { length } = permutation;
  const result = [[...permutation]];
  const c = new Array(length).fill(0);
  let i = 1;
  let k;
  let p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push([...permutation]);
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};

const permuteArr = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const temp = [];
      for (let k = 0; k < arr.length; k++) {
        temp.push(k === j ? arr[i] : arr[k]);
      }
      res.push(temp);
    }
  }
  return res;
};

const permute = (arr) => {
  if (arr.length <= 1) return [arr];
  const perms = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const rn = arr.slice(0, i).concat(arr.slice(i + 1));
    const rnp = permute(rn);
    for (const perm of rnp) {
      perms.push([curr].concat(perm));
    }
  }
  return perms;
};

const matchBetween = (left, right, str) => {
  // Match characters between given left and right character
  const generateRegex = (tl, tr) => {
    return new RegExp(`(?<=${tl})(.*?)(?=${tr})`, 'g');
  };
  return str.match(generateRegex(left, right));
};

const splitInParts = (s, partLength) => {
  // break str @ every partlength
  return s.match(new RegExp(`.{1,${partLength}}`, 'g')).join('\n');
};

const splitKeep = (str, delim) => {
  // split but keep the delimiter
  const res = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delim) {
      res.push(temp);
      temp = '';
    } else {
      temp += str[i];
    }
  }
  res.push(temp);
  return res;
};

const splitdel = (inputString, leftDelimiter, rightDelimiter) => {
  // Split string by delimeter
  // Escape special characters in the delimiters for use in regex
  const escapeRegExp = (string) => {
    return string.replaceAll(/[$()*+.?[\\\]^{|}]/g, String.raw`\$&`);
  };
  // Create the regular expression
  const regex = new RegExp(`${escapeRegExp(leftDelimiter)}(.*?)${escapeRegExp(rightDelimiter)}`, 'g');
  // Find matches
  const matches = [];
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    matches.push(match[1]);
  }
  return matches;
};

const splitString = (str) => {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? [str.slice(0, mid), str.slice(mid)]
    : [str.slice(0, mid + 1), str.slice(mid)];
};

const swapArrElement = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

const swapNestedArrElement = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (i === j) break;
    const temp = arr[i][1];
    arr[i][1] = arr[j][1];
    arr[j][1] = temp;
    i++;
    j--;
  }
  return arr;
};

const findchar = (arr, char) => {
  // find char in nested array
  const row = arr.findIndex((sub) => sub.includes(char));
  if (~row) {
    const col = arr[row].indexOf(char);
    return [row, col];
  }
  return null;
};

const getMatrixProduct = (a, b) => {
  const r1 = a.length;
  const r2 = b.length;
  const c1 = a[0].length;
  const c2 = b[0].length;
  if (c1 !== r2) return null;
  const m = new Array(r1);
  for (let r = 0; r < r1; ++r) {
    m[r] = new Array(c2);
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

const removeDuplicatesInMatrix = (arr) => {
  return arr.reduce((acc, sub) => {
    if (!acc.some((el) => el.join('') === sub.join(''))) {
      acc.push(sub);
    }
    return acc;
  }, []);
};

const createIterator = (func, n) => (x) => {
  // call function n number of times
  for (let i = 0; i < n; i++) {
    x = func(x);
  }
  return x;
};

const cycle = (...values) => {
  // function with state two
  let curr = 0;
  return () => values[mod(curr++, values.length)];
};

const combineMultArr = ([head, ...[headTail, ...tailTail]]) => {
  // get all combinations of multiple arrays
  // combineMultArr([arr1, arr2])
  if (!headTail) return head;
  const combined = headTail.reduce((acc, x) => acc.concat(head.map((h) => `${h}${x}`)), []);
  return combineMultArr([combined, ...tailTail]);
};

const combineObjects = (...args) => {
  // combineObjects({...}, {...})
  if (!args) return {};
  const base = {};
  for (let i = 0; i < args.length; i++) {
    const curr = args[i];
    for (const [k, v] of Object.entries(curr)) {
      base[k] = base[k] ? base[k] + v : v;
    }
  }
  return base;
};

const getYearDiff = (start, end = new Date()) => {
  return Math.trunc((
    (end.getTime() + (isLeapYear(end.getFullYear()) ? 864e5 : 0))
    - (start.getTime() + (isLeapYear(start.getFullYear()) ? 864e5 : 0))
  ) / 31_536e6);
};

const deepVals = (obj) => {
  /**
   * get array of values from deeply nested object
   */
  if (!obj) return [];
  let data = [];
  const keys = {};
  for (const k in obj) {
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

const deepReverse = (l) => {
  if (!Array.isArray(l)) return l;
  return l.map(deepReverse).reverse();
};

const deepKeys = (t, pre = []) => {
  /**
   * get array of keys from deeply nested object
   */
  if (Array.isArray(t)) {
    return [];
  } if (Object(t) === t) {
    return Object.entries(t).flatMap(([k, v]) => deepKeys(v, [...pre, k]));
  }
  return pre.join('.');
};

const compress = (str) => {
  // TWOPOINTERS: aaabba -> a3b2a
  if (str.length <= 1) return str;
  let left = 0; let
    right = 0;
  let res = ''; let
    last = '';
  while (right < str.length) {
    if (str[right] === last[0] || right === left) {
      last += str[right];
    } else if (last.length > 0) {
      res += last[0] + (last.length > 1 ? last.length : '');
      left += last.length;
      right = left;
      last = str[left];
    }
    right++;
  }
  return res + (last ? last[0] + (last.length > 1 ? last.length : '') : '');
};

const getNumberOfSquares = (n) => {
  // i.e. n = 15 (1^2 + 2^2 + 3^2)
  let a = 1; let
    cnt = 1;
  while (cnt <= n) {
    if ((cnt + (a ** 2)) > n) return a - 1;
    cnt += (a++ ** 2);
  }
  return a - 1;
};

const lcmRange = (m, n) => {
  return (m > n
    ? lcmRange(n, m)
    : Array.from({ length: n - m + 1 }, (_, idx) => m + idx).reduce(LCM));
};

const smallestCommonFactor = (arr) => {
  const isPrime = (n) => {
    for (let i = 2; i <= n ** 0.5; i++) {
      if (!(n % i)) return false;
    }
    return n > 1;
  };

  const pfs = (n) => {
    const r = [];
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        r.push(i);
        n /= i;
      }
    }
    if (n > 1) r.push(n);
    return r;
  };

  if (arr.length === 0) return 1;
  const primeFactors = arr.map((v) => (isPrime(v) ? [v] : pfs(v)));
  for (let i = 0; i < primeFactors.length; i++) {
    for (let j = 0; j < primeFactors[i].length; j++) {
      if (arr.every((v) => v % Number.parseInt(primeFactors[i][j]) === 0)) {
        return Number.parseInt(primeFactors[i][j]);
      }
    }
  }
  return 1;
};

const curryAdd = (n) => {
  return function(m) {
    return n + m;
  };
};

const curryCountdown = (times, arr = []) => {
  // console.log(countdown(-3)(-5)()(+2)(-1)()()(),
  // [3, 7, 6, 3, 3, 2, 1, 0]);
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
};

const findSubarrMaxSum = (arr) => {
  if (arr.length === 0) return [[], 0];
  let maxSum = 0; let
    currentSum = 0;
  const m = {}; let
    currentSumArr = [];

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    currentSumArr.push(arr[i]);
    if (currentSum >= maxSum) {
      maxSum = currentSum;
      const temp = [...currentSumArr];
      const val = temp;
      if (m[currentSum]) {
        m[currentSum].push(val);
      } else {
        m[currentSum] = [val];
      }
      if (temp[0] + temp[1] === 0) {
        m[currentSum].push(temp.slice(2));
      }
    }
    if (currentSum < 0) {
      currentSum = 0;
      currentSumArr = [];
    }
  }
  if (!maxSum) return 0;
  return m[maxSum];
};

const longestBouncyList = (arr) => {
  // [1, 2, 3, 2, 1, ...]
  // Good alternative to windows
  let l = [arr[0]]; let
    m = l;
  for (let i = 0; i < arr.length; i++) {
    const prev = l.at(-1);
    const tert = l.at(-2);
    if (prev !== arr[i] && (l.length === 1 || (prev < tert) !== (arr[i] < prev))) l.push(arr[i]);
    else {
      if (m.length < l.length) m = l;
      if (i && arr[i] !== arr[i - 1]) i--;
      l = [arr[i]];
    }
  }
  return m.length < l.length ? l : m;
};

const genSubsets = (arr) => {
  // Generate subsets, permutations, combinations
  const subs = [[]];
  for (const el of arr) {
    const len = subs.length - 1;
    for (let i = 0; i <= len; i++) {
      subs.push([...subs[i], el]);
    }
  }
  return subs;
};

const longestComb = (arr, cmd = '<<') => {
  // finds multiple longest increasing or decreasing subsequence
  // << increasing, >> decreasing
  cmd = cmd.replaceAll(/\s/g, '');
  let pot = []; let
    maxLen = 0;
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
      || (curr.at(-1) < arr[k] && cmd === '<<')
      || (curr.at(-1) > arr[k] && cmd === '>>')
    ) {
      stack.push([k + 1, [...curr, arr[k]]]);
    }
    stack.push([k + 1, curr]);
  }

  if (pot.length === 0) return [];
  const res = pot.filter((el) => el.length === maxLen);
  return res.length === 1 ? res[0] : res;
};

const findLongestSubstr = (s) => {
  let match;
  let index = 0;
  let length = 0;
  const regex = /([\dA-Za-z])\1*/g;
  while (match = regex.exec(s)) {
    if (match[0].length > length) {
      length = match[0].length;
      index = match.index;
    }
  }
  return [`${s.charCodeAt(index)}`, length, [index, index + length - 1]];
};

const largestSubarrayIndex = (mtr) => {
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

const generateColor = () => {
  const rand = () => {
    return Math.trunc(Math.random() * 255);
  };
  let res = 16_777_216 + rand();
  for (let i = 0, shf = 16; i < 2; i++, shf -= 8) {
    res += rand() << shf;
  }
  return `#${res.toString(16).slice(1)}`;
};

const isPrime = (n) => {
  // FAST CHECK PRIME
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPrime2 = (n) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (!(n % i)) return false;
  }
  return n > 1;
};

const genfib = (n) => {
  // fastest fib ive tried so far...
  // https://www.nayuki.io/page/fast-fibonacci-algorithms
  // https://www.nayuki.io/res/fast-fibonacci-algorithms/fastfibonacci.js
  if (n === 0) return [0, 1];
  const [a, b] = genfib(Math.trunc(n / 2));
  const c = a * (b * 2 - a);
  const d = a * a + b * b;
  if (n % 2 === 0) {
    return [c, d];
  }
  return [d, c + d];
};

const fibWithMod = (n) => {
  const tm = 100_000;
  if (n === 0) return [0, 1];
  const [a, b] = fibWithMod(Math.floor(n / 2));
  const c = a * (b * 2 - a);
  const d = a * a + b * b;
  return n % 2 === 0 ? [c % tm, d % tm] : [d % tm, (c + d) % tm];
};

const standFib = (n) => {
  let a = 0;
  let b = 1;
  let t;

  while (n > 0) {
    t = b;
    b += a;
    a = t;
    n--;
  }
  return a;
};

const bitadd = (x, y) => {
  x = x.padStart(y.length, '0');
  y = y.padStart(x.length, '0');

  let r = ''; let
    nc = '0';
  for (let i = x.length - 1; i >= 0; i--) {
    const val = +x[i] + +y[i] + +nc;
    r += ['0', '1', '0', '1'][val];
    nc = ['0', '0', '1', '1'][val];
  }
  return r + (nc === '0' ? '' : '1');
};

const bitwiseAdd = (x, y) => {
  let crr = x & y;
  let res = x ^ y;
  while (crr !== 0) {
    const tmp = crr << 1;
    crr = res & tmp;
    res ^= tmp;
  }
  return res;
};

const bitwiseExponent = (a, n) => {
  let res = 1;
  while (n > 0) {
    const last = n & 1;
    if (last) res *= a;
    a *= a;
    n >>= 1;
  }
  return res;
};

const bitwiseMult = (a, b) => {
  let res = 0;
  while (b > 0) {
    if (b & 1) {
      res += a;
    }
    a <<= 1;
    b >>= 1;
  }
  return res;
};

const bitwiseSubtract = (x, y) => {
  const tempX = x;
  const tempY = y;
  if (x < y) {
    x = y;
    y = tempX;
  }
  while (y != 0) {
    const brr = (~x) & y;
    x ^= y;
    y = brr << 1;
  }
  if (tempX < tempY) return -x;
  return x;
};

const swapAdjacentBits = (n) => {
  let [a, b] = [n & 0xAA_AA_AA_AA, n & 0x55_55_55_55];
  a >>= 1;
  b <<= 1;
  return a | b;
};

const binarySearch1 = (lst, val) => {
  // binary search with path implementation
  const path = [];
  let start = 0;
  let end = lst.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    path.push(lst[mid]);
    if (lst[mid] === val) {
      return path;
    }
    if (lst[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return path;
};

const prog = (n, max, min) => {
  /*
  arithmetic progression - get sum of prod within range
  - n: constant multiplier
  - prog: constant decrement
  - min: minimum value for prog
  
  Example:
  seq(n: 5, prod: 6, min: 2) ->
  (5 * 6) + (5 * 5) + (5 * 4) + (5 * 3) + (5 * 2) = 100
  */
  const terms = max - min + 1;
  return (terms / 2) * (2 * n * max - n * (terms - 1));
};

const numPerm = (arr) => {
  // DETERMINE NUMBER OF POSSIBLE PERMUTES OF ARRAY
  let perm = 1;
  for (let i = 1; i <= arr.length; i++) {
    perm *= i;
  }
  return perm;
};

const permutator = (inputArr) => {
  // permute comb
  const result = [];

  const pm = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.splice(i, 1);
        pm([...curr], m.concat(next));
      }
    }
  };
  pm(inputArr);
  return result;
};

const heapsPermute = (perm) => {
  // https://stackoverflow.com/questions/9960908/permutations-in-javascript?rq=3
  // HEAPS PERMUTE
  const len = perm.length;
  const res = [[...perm]];
  const c = new Array(len).fill(0);
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
      res.push([...perm]);
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return res;
};

const dfs1 = (nums) => {
  // DFS : SUBSET : 1
  const res = [];
  const dfs = (idx, path) => {
    res.push(path);
    for (let i = idx; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  };
  dfs(0, []);
  return res;
};

const queueMonoIncr = (nums) => {
  // QUEUE, STACK, MONO
  const n = nums.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack.at(-1)] < nums[i]) {
      const idx = stack.pop();
      ans[idx] = i - idx;
    }
    stack.push(i);
  }
  return ans;
};

const countPermsOfMatrix = (mtr) => {
  // count possible of permutations of matrix;
  const fact = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  };
  const flt = mtr.flat();
  const uniq = [...new Set(flt)];
  return fact(flt.length) / uniq.reduce((acc, val) => acc * fact(flt.filter((x) => x === val).length), 1);
};

const buildTrie = (...words) => {
  // c(buildTrie("trie", "trie"), { 't': { 'tr': { 'tri': { 'trie': null } } } });
  const trie = {};
  for (const word of words) {
    let node = trie;
    let str = '';
    for (const char of word) {
      str += char;
      node[str] = node[str] || (str === word ? null : {});
      node = node[str];
    }
  }
  return trie;
};

const lazyChain = (arg, calls = []) => {
  /*
  lazyChain(123456789)
      .invoke('toExponential')
      .invoke('slice', 2, 5)
      .invoke('replace', /3/, 'a')
      .invoke('repeat', 3)
      .value(), '2a42a42a4'
  
  method chaining, chain, lazy eval,
  */
  return ({
    curr: arg,
    invoke(method, ...rest) {
      calls.push((curr) => curr[method](...rest));
      return this;
    },
    value() {
      for (const fn of calls) {
        this.curr = fn(this.curr);
      }
      return this.curr;
    },
  });
};

const compose = (f, g) => {
  /*
  compose, chain,
  const add1 = function (a) { return a + 1; };
  const id = function (a) { return a; };
  c(compose(add1, id)(0), 1);
  const addAll3 = function (a, b, c) { return a + b + c; };
  c(compose(add1, addAll3)(1, 2, 3), 7);
  */
  return (...x) => f(g(...x));
};

const nextMultipleOfFive = (n) => {
  const poss = [
    '0', '1', '01', '11', '001', '101', '011', '111', '0001', '1001', '0101', '1101', '0011', '1011', '0111', '1111', '00001', '10001', '01001', '11001', '00101', '10101', '01101', '11101', '00011', '10011', '01011', '11011', '00111', '10111', '01111', '11111', '000001', '100001', '010001', '110001', '001001', '101001', '011001', '111001', '000101', '100101', '010101', '110101', '001101', '101101', '011101', '111101', '000111', '100111', '010111', '110111', '001111', '101111', '011111', '111111',
  ];
  if (n <= 2) return 5;
  const bin = n.toString(2);

  for (let i = 0; i < poss.length; i++) {
    const t = Number.parseInt(bin + poss[i], 2);
    if (t % 5 === 0) return t;
  }
  return null;
};

const buildPriorityQueue = (frequencies) => {
  const pq = new PriorityQueue();
  for (const [char, freq] of frequencies) {
    pq.enqueue(
      new FrequencyNode(char, freq),
    );
  }
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

const calcVariance = (data) => {
  /*
  variance and stdDeviation
  */
  const getmean = (data) => {
    return data.reduce((a, b) => a + b, 0) / data.length;
  };
  const mean = getmean(data);
  const vari = getmean(data.map((n) => (n - mean) ** 2));
  const stdvar = Math.sqrt(vari);
  return {
    variance: vari,
    stdDeviation: stdvar,
  };
};

const getPromiseState = (promise) => {
  /*
  get promise state
  fulfilled
  pending
  rejected
  */
  return new Promise((resolve) => {
    promise.then(() => resolve('fulfilled'), () => resolve('rejected'));
    queueMicrotask(() => resolve('pending'));
  });
};

const cbMemo = (fn) => {
  /*
  memo works w any type and any length of function arguments
  */
  const obj = { map: new Map() };
  return (...args) => {
    let current = obj;
    for (const arg of args) {
      if (!current.map.has(arg)) current.map.set(arg, { map: new Map() });
      current = current.map.get(arg);
    }
    return current.hasOwnProperty('res') ? current.res : current.res = fn(...args);
  };
};

const pascal = (n) => {
  // n = depth
  // pascal triangle
  // pascal matrix
  const mtr = new Array(n).fill().map((_, i) => new Array(i + 1).fill().map((__, j) => ((j === 0 || j === i) ? 1 : ((j + 1 === i || j === 1) ? i : 0))));
  const prev = [];
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

const replaceObjectValueInPlace = (data, repl) => {
  // object search and replace
  // recursive flat, search, in place, dynamic
  if (data === undefined || repl === undefined) return data;
  for (const [k, v] of Object.entries(data)) {
    if (v === 'dynamic') {
      data[k] = repl;
    } else if (Array.isArray(v)) {
      data[k] = v.map((e) => {
        if (typeof e === 'object' && e !== null) {
          return replaceObjectValueInPlace(e, repl);
        }
        return e === 'dynamic' ? repl : e;
      });
    } else if (typeof v === 'object' && v !== null) {
      data[k] = replaceObjectValueInPlace(v, repl);
    }
  }
  return data;
};

const recordDepth = (tree, depth = 0) => {
  // add depth to each layer of object
  // recursion
  if (typeof tree === 'object' && !Array.isArray(tree) && tree !== null) {
    if (Object.keys(tree).length === 0) return { depth: 0 };
    for (const [k, v] of Object.entries(tree)) {
      if (typeof v === 'object' && !Array.isArray(v)) {
        tree[k] = { ...recordDepth(v, depth + 1), depth: depth + 1 };
      } else {
        tree.depth = depth;
      }
    }
    return tree;
  }
  return null;
};

const objectDepthCount = (obj) => {
  const isobj = (obj) => {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
  };
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

const countAllStrInstancesInObj = (obj) => {
  let res = 0;
  const rnd = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        res++;
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        rnd(obj[key]);
      }
    }
  };
  rnd(obj);
  return res;
};

const magicArray = (...args) => {
  // Chainable custom methods that work with whatever arguments and native methods
  return new Proxy(args, {
    get(target, prop) {
      if (prop in fn || typeof target[prop] === 'function') {
        return function(...args) {
          const method = prop in fn ? fn[prop] : target[prop];
          const result = method.apply(target, args);
          return Array.isArray(result) ? magicArray(...result) : result;
        };
      }
      return target[prop];
    },
  });
};

const proxyArr = (arr) => {
  // define: const arr = proxyArr(arr);
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
        if (prop < 0) throw new Error('');
      }
      return Reflect.set(target, prop, value, receiver);
    },
  };
  return new Proxy(arr, handler);
};

const magicFunction = {
  getFiltered(predicate) {
    return this.filter(predicate);
  },
  getRejected(predicate) {
    return this.filter((e) => !predicate(e));
  },
  getSplit(predicate) {
    return {
      pass: magicArray(...this.filter(predicate)),
      fail: magicArray(...this.filter((e) => !predicate(e))),
    };
  },
  double() {
    return magicArray(...this, ...this);
  },
  multiply(n) {
    return this.filter((e) => typeof e === 'number').map((e) => e * n);
  },
  count() {
    return this.length;
  },
  first() {
    return this.slice(0, 1);
  },
  last() {
    return this.slice(-1);
  },
  eq(n) {
    return this.slice(n, n + 1);
  },
};

const functionWithState = (function() {
  // ...functionWithState.getState('prop')
  const memo = {};
  return {
    getState(prop) {},
  };
}());

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

class Garage {
  // states (statemap): opening, open, closing, closed, paused
  // 0: open|closed|paused, 1: opening, -1: closing
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
      opening: () => {
        this.doorPos < 5 ? this.doorPos++ : (this.state = 'open');
        this.direction = 1;
      },
      closing: () => {
        this.doorPos > 0 ? this.doorPos-- : (this.state = 'closed');
        this.direction = -1;
      },
      paused: () => {
        if (this.doorPos === 5 || this.doorPos === 0) {
          this.direction = 0;
        }
      },
      open: () => {},
      closed: () => {},
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
      closed: 'opening',
      open: 'closing',
      opening: this.obstacle ? 'closing' : 'paused',
      closing: this.obstacle ? 'opening' : 'paused',
      paused: this.direction === 1 ? 'opening' : 'closing',
    };
    this.state = stateMap[this.state];
    this.obstacle = false;
  }
}

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

class Stream {
  // endless arrays
  // stream
  // head, tail, Stream and tail() to get the rest of the currentStream without the head
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

String.prototype.matchAllPoly = function(regexp, matches = [], match) {
  while ((match = regexp.exec(this)) !== null) matches.push(match);
  return matches;
};

String.prototype.hashify = function() {
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
  const m = {};
  for (const l of this) { m[l] = m[l] === undefined ? '' : []; }
  for (let i = 1; i <= this.length; i++) {
    const after = i == this.length ? this[0] : this[i];
    if (after) {
      if (typeof m[this[i - 1]] === 'string') m[this[i - 1]] += after;
      else m[this[i - 1]].push(after);
    }
  }
  return m;
};

Array.prototype.flatten = function() {
  const flatten = (arr) => {
    return arr.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)), []);
  };
  const res = flatten(this);
  return res;
};

Array.prototype.wrapRemove = function(index, count) {
  if (index + count > this.length) {
    return this.slice(0, index).concat(this.slice(index + count - this.length));
  }
  return this.slice(0, index).concat(this.slice(index + count));
};

Array.prototype.remove = function(index, count) {
  if (index + count > this.length) { count = this.length - index; }
  return this.slice(0, index).concat(this.slice(index + count));
};

Array.prototype.at = function(index) {
  return index < 0 ? this[this.length + index] : this[index];
};
