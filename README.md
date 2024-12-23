# codewars.js Documentation

*readme generated from the following script: [LINK](./generate-readme.js)*

- This is not code I use to develop or for work!! This is code I've written when hobby coding/expirementing
- It also includes a node script to generate a similar readme as this from a single file

## Quick Index

- [add](#add) (Line 372)
- [addCommasToNum](#addcommastonum) (Line 372)
- [arrHash](#arrhash) (Line 302)
- [binarySearch1](#binarysearch1) (Line 1389)
- [bitadd](#bitadd) (Line 1284)
- [bitwiseAdd](#bitwiseadd) (Line 1298)
- [bitwiseExponent](#bitwiseexponent) (Line 1309)
- [bitwiseMult](#bitwisemult) (Line 1320)
- [bitwiseSubtract](#bitwisesubtract) (Line 1332)
- [boolToInt](#booltoint) (Line 113)
- [buildPriorityQueue](#buildpriorityqueue) (Line 1713)
- [buildTrie](#buildtrie) (Line 1581)
- [calcTrueMod](#calctruemod) (Line 93)
- [calcVariance](#calcvariance) (Line 1748)
- [cbMemo](#cbmemo) (Line 1775)
- [combineMultArr](#combinemultarr) (Line 743)
- [combineObjects](#combineobjects) (Line 752)
- [comp](#comp) (Line 99)
- [compose](#compose) (Line 1629)
- [compress](#compress) (Line 814)
- [convertToMixedNumeral](#converttomixednumeral) (Line 487)
- [convPeriodicFrac](#convperiodicfrac) (Line 456)
- [countAllStrInstancesInObj](#countallstrinstancesinobj) (Line 1861)
- [countFiveAndTwo](#countfiveandtwo) (Line 119)
- [countFourAndTwo](#countfourandtwo) (Line 128)
- [countPermsOfMatrix](#countpermsofmatrix) (Line 1567)
- [countTrailingZerosOfFactorial](#counttrailingzerosoffactorial) (Line 393)
- [createIterator](#createiterator) (Line 716)
- [createMatrix](#creatematrix) (Line 84)
- [curryCountdown](#currycountdown) (Line 908)
- [cycle](#cycle) (Line 726)
- [deepKeys](#deepkeys) (Line 803)
- [deepReverse](#deepreverse) (Line 795)
- [deepVals](#deepvals) (Line 779)
- [dfs1](#dfs1) (Line 1479)
- [divide](#divide) (Line 141)
- [divideArray](#dividearray) (Line 257)
- [divisorsSum](#divisorssum) (Line 362)
- [extractIdsFromObject](#extractidsfromobject) (Line 310)
- [factorial](#factorial) (Line 401)
- [factorialfast](#factorialfast) (Line 401)
- [fibWithMod](#fibwithmod) (Line 1210)
- [find](#find) (Line 107)
- [findchar](#findchar) (Line 669)
- [findDup](#finddup) (Line 283)
- [findGCD](#findgcd) (Line 107)
- [findLongestSubstr](#findlongestsubstr) (Line 1048)
- [findSubarrMaxSum](#findsubarrmaxsum) (Line 953)
- [findUniqNumInArr](#finduniqnuminarr) (Line 157)
- [FrequencyNode](#frequencynode) (Line 1689)
- [functionComposition](#functioncomposition) (Line 519)
- [Garage](#garage) (Line 1508)
- [gauss](#gauss) (Line 103)
- [gaussmod](#gaussmod) (Line 104)
- [GCD](#gcd) (Line 846)
- [generateColor](#generatecolor) (Line 1134)
- [genfib](#genfib) (Line 1199)
- [genPrimeArr](#genprimearr) (Line 314)
- [genSubsets](#gensubsets) (Line 1004)
- [getAvgOfDiaganols](#getavgofdiaganols) (Line 494)
- [getCallbackParamNames](#getcallbackparamnames) (Line 226)
- [getIndexOfSpaces](#getindexofspaces) (Line 1074)
- [getMatrixProduct](#getmatrixproduct) (Line 678)
- [getmax](#getmax) (Line 138)
- [getmin](#getmin) (Line 137)
- [getNumberOfSquares](#getnumberofsquares) (Line 836)
- [getNumsWith3Divisors](#getnumswith3divisors) (Line 334)
- [getPromiseState](#getpromisestate) (Line 1765)
- [getSignOfNum](#getsignofnum) (Line 434)
- [getYearDiff](#getyeardiff) (Line 767)
- [hash](#hash) (Line 197)
- [hasNum](#hasnum) (Line 106)
- [heapsPermute](#heapspermute) (Line 1453)
- [HTMLGen](#htmlgen) (Line 1363)
- [inorder](#inorder) (Line 139)
- [isAnagram](#isanagram) (Line 443)
- [isEven](#iseven) (Line 1348)
- [isLeapYear](#isleapyear) (Line 765)
- [isNum](#isnum) (Line 102)
- [isPerfectSq](#isperfectsq) (Line 108)
- [isPowerOfTwo](#ispoweroftwo) (Line 441)
- [isPrime](#isprime) (Line 335)
- [isPrime2](#isprime2) (Line 1181)
- [largestSubarrayIndex](#largestsubarrayindex) (Line 1062)
- [lazyChain](#lazychain) (Line 1605)
- [LCM](#lcm) (Line 847)
- [lcmRange](#lcmrange) (Line 848)
- [lengthOfNum](#lengthofnum) (Line 438)
- [longestBouncyList](#longestbouncylist) (Line 987)
- [longestComb](#longestcomb) (Line 1017)
- [magicArray](#magicarray) (Line 1877)
- [matchBetween](#matchbetween) (Line 584)
- [mergeStrings](#mergestrings) (Line 478)
- [mod](#mod) (Line 82)
- [modtwo](#modtwo) (Line 88)
- [mult](#mult) (Line 136)
- [myXOR](#myxor) (Line 1282)
- [nextMultipleOfFive](#nextmultipleoffive) (Line 1667)
- [numPerm](#numperm) (Line 1424)
- [objectDepthCount](#objectdepthcount) (Line 1842)
- [paginate](#paginate) (Line 213)
- [pascal](#pascal) (Line 1790)
- [permutator](#permutator) (Line 1433)
- [permute](#permute) (Line 515)
- [permuteArr](#permutearr) (Line 555)
- [permuteHeaps](#permuteheaps) (Line 530)
- [permuteMatrix](#permutematrix) (Line 515)
- [primeFactorSum](#primefactorsum) (Line 423)
- [Primes](#primes) (Line 1158)
- [PriorityQueue](#priorityqueue) (Line 1697)
- [prog](#prog) (Line 1418)
- [proxyArr](#proxyarr) (Line 1926)
- [queueMonoIncr](#queuemonoincr) (Line 1492)
- [recordDepth](#recorddepth) (Line 1827)
- [removeAdjacentDup](#removeadjacentdup) (Line 1384)
- [removeCharFromMatrix](#removecharfrommatrix) (Line 697)
- [removeDuplicatesInMatrix](#removeduplicatesinmatrix) (Line 706)
- [removeElementsWithDuplicates](#removeelementswithduplicates) (Line 291)
- [removeLastDigit](#removelastdigit) (Line 1681)
- [replaceObjectValueInPlace](#replaceobjectvalueinplace) (Line 1806)
- [reverseNum](#reversenum) (Line 377)
- [reverseNumber](#reversenumber) (Line 382)
- [rotateArrayLeft](#rotatearrayleft) (Line 1734)
- [roundRobin](#roundrobin) (Line 1)
- [simplifyParenthesesExpression](#simplifyparenthesesexpression) (Line 1109)
- [slidingWindowBasic1](#slidingwindowbasic1) (Line 268)
- [smallestCommonFactor](#smallestcommonfactor) (Line 866)
- [solveForX](#solveforx) (Line 1685)
- [sortAlph](#sortalph) (Line 447)
- [sortHash](#sorthash) (Line 295)
- [sortOddFirst](#sortoddfirst) (Line 449)
- [splitArrayEvenOdd](#splitarrayevenodd) (Line 629)
- [splitdel](#splitdel) (Line 613)
- [splitInParts](#splitinparts) (Line 592)
- [splitKeep](#splitkeep) (Line 597)
- [splitString](#splitstring) (Line 633)
- [standFib](#standfib) (Line 1219)
- [Stream](#stream) (Line 1636)
- [sum](#sum) (Line 109)
- [sumDigits](#sumdigits) (Line 147)
- [sumOfSquares](#sumofsquares) (Line 109)
- [swap](#swap) (Line 640)
- [swap1sand0s](#swap1sand0s) (Line 1357)
- [swapAdjacentBits](#swapadjacentbits) (Line 1349)
- [swapArrElement](#swaparrelement) (Line 640)
- [swapNestedArrElement](#swapnestedarrelement) (Line 653)
- [toBinary](#tobinary) (Line 165)
- [transposeMatrix](#transposematrix) (Line 1739)
- [triangularLineLength](#triangularlinelength) (Line 110)
- [wrapInd](#wrapind) (Line 928)

## Detailed Documentation

### add

**[→ Line 372](./codewars.js#L372)**

```javascript
const addCommasToNum = (n) => {
  return (`${n}`).replaceAll(/.(?=(\d{3})+$)/g, '$&,');
};
```

### addCommasToNum

**[→ Line 372](./codewars.js#L372)**

```javascript
const addCommasToNum = (n) => {
  return (`${n}`).replaceAll(/.(?=(\d{3})+$)/g, '$&,');
};
```

### arrHash

**[→ Line 302](./codewars.js#L302)**

```javascript
const arrHash = (arr) => {
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = m[arr[i]] ? [...m[arr[i]], i] : [i];
  }
  return m;
};
```

### binarySearch1

**[→ Line 1389](./codewars.js#L1389)**

```javascript
const binarySearch1 = (lst, val) => {
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
```

### bitadd

**[→ Line 1284](./codewars.js#L1284)**

```javascript
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
```

### bitwiseAdd

**[→ Line 1298](./codewars.js#L1298)**

```javascript
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
```

### bitwiseExponent

**[→ Line 1309](./codewars.js#L1309)**

```javascript
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
```

### bitwiseMult

**[→ Line 1320](./codewars.js#L1320)**

```javascript
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
```

### bitwiseSubtract

**[→ Line 1332](./codewars.js#L1332)**

```javascript
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
```

### boolToInt

**[→ Line 113](./codewars.js#L113)**

```javascript
const boolToInt = (bool) => bool | 0;
// --------------------------------------------
```

### buildPriorityQueue

**[→ Line 1713](./codewars.js#L1713)**

```javascript
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
```

### buildTrie

**[→ Line 1581](./codewars.js#L1581)**

```javascript
function buildTrie(...words) {
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
}
```

### calcTrueMod

**[→ Line 93](./codewars.js#L93)**

```javascript
const calcTrueMod = (dividend, exponent, modulus) => {
  const base = dividend % modulus;
  const power = (dividend % modulus) ** ((exponent + 3) % 4);
  const result = Math.round(base * power) % modulus;
  return result;
};
```

### calcVariance

**[→ Line 1748](./codewars.js#L1748)**

```javascript
const calcVariance = (data) => {
  const getmean = (data) => data.reduce((a, b) => a + b, 0) / data.length;
  const mean = getmean(data);
  const vari = getmean(data.map((n) => (n - mean) ** 2));
  const stdvar = Math.sqrt(vari);
  return {
    variance: vari,
    stdDeviation: stdvar,
  };
};
```

### cbMemo

**[→ Line 1775](./codewars.js#L1775)**

```javascript
const cbMemo = (fn) => {
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
```

### combineMultArr

**[→ Line 743](./codewars.js#L743)**

```javascript
const combineMultArr = ([head, ...[headTail, ...tailTail]]) => {
  if (!headTail) return head;
  const combined = headTail.reduce((acc, x) => {
    return acc.concat(head.map((h) => `${h}${x}`));
  }, []);
  return combineMultArr([combined, ...tailTail]);
};
```

### combineObjects

**[→ Line 752](./codewars.js#L752)**

```javascript
function combineObjects(...args) {
  if (!args) return {};
  const base = {};
  for (let i = 0; i < args.length; i++) {
    const curr = args[i];
    for (const [k, v] of Object.entries(curr)) {
      base[k] = base[k] ? base[k] + v : v;
    }
  }
  return base;
}
```

### comp

**[→ Line 99](./codewars.js#L99)**

```javascript
const comp = (a, b, i, m) => (i < m ? a[i] - b[i] || comp(a, b, i + 1, m) : 0);

```

### compose

**[→ Line 1629](./codewars.js#L1629)**

```javascript
function compose(f, g) {
  return (...x) => f(g(...x));
}
```

### compress

**[→ Line 814](./codewars.js#L814)**

```javascript
function compress(str) {
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
}
```

### convertToMixedNumeral

**[→ Line 487](./codewars.js#L487)**

```javascript
const convertToMixedNumeral = (parm) => {
  const [n, d] = parm.split('/').map(Number);
  const diff = n % d; const
    intg = Math.trunc(n / d);
  return diff === 0 ? String(intg) : ((Math.abs(n) < Math.abs(d)) ? `${n}/${d}` : `${intg} ${Math.abs(diff)}/${d}`);
};
```

### convPeriodicFrac

**[→ Line 456](./codewars.js#L456)**

```javascript
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
```

### countAllStrInstancesInObj

**[→ Line 1861](./codewars.js#L1861)**

```javascript
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
```

### countFiveAndTwo

**[→ Line 119](./codewars.js#L119)**

```javascript
const countFiveAndTwo = (n, k) => {
  const k5 = Math.trunc((n - 2 * k) / 3);
  const k2 = Math.trunc((n - 5 * k5) / 2);
  if (k2 < 0 || k5 < 0) return 'Invalid';
  if (k2 * 2 + k5 * 5 !== n) return 'Invalid';
  return [k2, k5];
};
```

### countFourAndTwo

**[→ Line 128](./codewars.js#L128)**

```javascript
const countFourAndTwo = (n, k) => {
  const k4 = Math.trunc(n / 2) - k;
  const k2 = k - k4;
  return [k2, k4];
};
```

### countPermsOfMatrix

**[→ Line 1567](./codewars.js#L1567)**

```javascript
function countPermsOfMatrix(mtr) {
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
}
```

### countTrailingZerosOfFactorial

**[→ Line 393](./codewars.js#L393)**

```javascript
const countTrailingZerosOfFactorial = (n) => {
  let zeros = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeros += Math.trunc(n / i);
  }
  return zeros;
};
```

### createIterator

**[→ Line 716](./codewars.js#L716)**

```javascript
const createIterator = (func, n) => {
  return (x) => {
    for (let i = 0; i < n; i++) {
      x = func(x);
    }
    return x;
  };
};
```

### createMatrix

**[→ Line 84](./codewars.js#L84)**

```javascript
const createMatrix = (a, b) => {
  return new Array(a).fill().map((_, i) => new Array(b).fill().map((__, j) => ''));
};
```

### curryCountdown

**[→ Line 908](./codewars.js#L908)**

```javascript
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
```

### cycle

**[→ Line 726](./codewars.js#L726)**

```javascript
const cycle = (...values) => {
  let curr = 0;
  return () => {
    return values[mod(curr++, values.length)];
  };
};
```

### deepKeys

**[→ Line 803](./codewars.js#L803)**

```javascript
const deepKeys = (t, pre = []) => {
  if (Array.isArray(t)) {
    return [];
  } if (Object(t) === t) {
    return Object.entries(t).flatMap(([k, v]) => deepKeys(v, [...pre, k]));
  }
  return pre.join('.');
};
```

### deepReverse

**[→ Line 795](./codewars.js#L795)**

```javascript
const deepReverse = (l) => {
  if (!Array.isArray(l)) return l;
  return l.map(deepReverse).reverse();
};
```

### deepVals

**[→ Line 779](./codewars.js#L779)**

```javascript
const deepVals = (obj) => {
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
```

### dfs1

**[→ Line 1479](./codewars.js#L1479)**

```javascript
const dfs1 = (nums) => {
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
```

### divide

**[→ Line 141](./codewars.js#L141)**

```javascript
const divide = (a, b) => {
  if (b == 0) return 0;
  if (a == 0) return 0;
  return a * b ** -1;
};
```

### divideArray

**[→ Line 257](./codewars.js#L257)**

```javascript
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
```

### divisorsSum

**[→ Line 362](./codewars.js#L362)**

```javascript
const divisorsSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};
```

### extractIdsFromObject

**[→ Line 310](./codewars.js#L310)**

```javascript
const extractIdsFromObject = (data) => {
  return (JSON.stringify(data).matchAll(/"id":\d+/gi) || []).map((n) => +n[0].match(/\d+/g)[0]);
};
```

### factorial

**[→ Line 401](./codewars.js#L401)**

```javascript
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
```

### factorialfast

**[→ Line 401](./codewars.js#L401)**

```javascript
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
```

### fibWithMod

**[→ Line 1210](./codewars.js#L1210)**

```javascript
function fibWithMod(n) {
  const mod = 100_000;
  if (n === 0) return [0, 1];
  const [a, b] = fibWithMod(Math.floor(n / 2));
  const c = a * (b * 2 - a);
  const d = a * a + b * b;
  return n % 2 === 0 ? [c % mod, d % mod] : [d % mod, (c + d) % mod];
}
```

### find

**[→ Line 107](./codewars.js#L107)**

```javascript
const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));
const isPerfectSq = (n) => Math.sqrt(n) === Math.trunc(Math.sqrt(n));
```

### findchar

**[→ Line 669](./codewars.js#L669)**

```javascript
const findchar = (arr, char) => {
  const row = arr.findIndex((sub) => sub.includes(char));
  if (~row) {
    const col = arr[row].indexOf(char);
    return [row, col];
  }
  return null;
};
```

### findDup

**[→ Line 283](./codewars.js#L283)**

```javascript
const findDup = (arr) => {
  let dup = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dup = dup ^ arr[i] ^ i;
  }
  return dup;
};
```

### findGCD

**[→ Line 107](./codewars.js#L107)**

```javascript
const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));
const isPerfectSq = (n) => Math.sqrt(n) === Math.trunc(Math.sqrt(n));
```

### findLongestSubstr

**[→ Line 1048](./codewars.js#L1048)**

```javascript
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
```

### findSubarrMaxSum

**[→ Line 953](./codewars.js#L953)**

```javascript
function findSubarrMaxSum(arr) {
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
  ...
```

### findUniqNumInArr

**[→ Line 157](./codewars.js#L157)**

```javascript
const findUniqNumInArr = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i];
  }
  return res;
};
```

### FrequencyNode

**[→ Line 1689](./codewars.js#L1689)**

```javascript
class FrequencyNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}
```

### functionComposition

**[→ Line 519](./codewars.js#L519)**

```javascript
const functionComposition = (...fns) => (x) => {
  // https://medium.com/javascript-scene/why-every-react-developer-should-learn-function-composition-23f41d4db3b1
  /*
  const addOne = (a) => a + 1;
  const multTwo = (b) => b * 2;
  const addOneMultTwo = functionComposition(multTwo, addOne)(5); // 12
  */
  return fns.reduceRight((y, f) => f(y), x);
};
```

### Garage

**[→ Line 1508](./codewars.js#L1508)**

```javascript
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
      opening: () => {
        this.doorPos < 5 ? this.doorPos++ : (this.state = 'open');
        this.direction = 1;
      },
  ...
```

### gauss

**[→ Line 103](./codewars.js#L103)**

```javascript
const gauss = (n) => n * (n + 1) / 2;
const gaussmod = (n) => n * (n + 1) * (n + 2) / 6;
```

### gaussmod

**[→ Line 104](./codewars.js#L104)**

```javascript
const gaussmod = (n) => n * (n + 1) * (n + 2) / 6;
// n * (n + 1) * (n + 2) / 6
```

### GCD

**[→ Line 846](./codewars.js#L846)**

```javascript
const GCD = (a, b) => (b ? GCD(b, a % b) : a);
const LCM = (a, b) => a * b / GCD(a, b);
```

### generateColor

**[→ Line 1134](./codewars.js#L1134)**

```javascript
const generateColor = function() {
  const rand = () => Math.trunc(Math.random() * 255);
  let res = 16_777_216 + rand();
  for (let i = 0, shf = 16; i < 2; i++, shf -= 8) {
    res += rand() << shf;
  }
  return `#${res.toString(16).slice(1)}`;
};
```

### genfib

**[→ Line 1199](./codewars.js#L1199)**

```javascript
function genfib(n) {
  if (n === 0) return [0, 1];
  const [a, b] = genfib(Math.trunc(n / 2));
  const c = a * (b * 2 - a);
  const d = a * a + b * b;
  if (n % 2 === 0) {
    return [c, d];
  }
  return [d, c + d];
}
```

### genPrimeArr

**[→ Line 314](./codewars.js#L314)**

```javascript
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
```

### genSubsets

**[→ Line 1004](./codewars.js#L1004)**

```javascript
const genSubsets = (arr) => {
  const subs = [[]];
  for (const el of arr) {
    const len = subs.length - 1;
    for (let i = 0; i <= len; i++) {
      subs.push([...subs[i], el]);
    }
  }
  return subs;
};
```

### getAvgOfDiaganols

**[→ Line 494](./codewars.js#L494)**

```javascript
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
```

### getCallbackParamNames

**[→ Line 226](./codewars.js#L226)**

```javascript
const getCallbackParamNames = (f) => {
  return f.length > 0 ? /\(([^()]+)\)/.exec(f.toString().replaceAll(/\s+/g, ''))[1].split(',') : [];
};
```

### getIndexOfSpaces

**[→ Line 1074](./codewars.js#L1074)**

```javascript
const getIndexOfSpaces = (str) => {
  return [...str.matchAll(/ /g)].map((a, i) => a.index - i);
};
```

### getMatrixProduct

**[→ Line 678](./codewars.js#L678)**

```javascript
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
```

### getmax

**[→ Line 138](./codewars.js#L138)**

```javascript
const getmax = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), -Infinity);
const inorder = (arr) => arr.every((x, i) => i === 0 || (x > arr[i - 1] || x < arr[i - 1]));
```

### getmin

**[→ Line 137](./codewars.js#L137)**

```javascript
const getmin = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), Infinity);
const getmax = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), -Infinity);
```

### getNumberOfSquares

**[→ Line 836](./codewars.js#L836)**

```javascript
const getNumberOfSquares = (n) => {
  let a = 1; let
    cnt = 1;
  while (cnt <= n) {
    if ((cnt + (a ** 2)) > n) return a - 1;
    cnt += (a++ ** 2);
  }
  return a - 1;
};
```

### getNumsWith3Divisors

**[→ Line 334](./codewars.js#L334)**

```javascript
const getNumsWith3Divisors = (n, m) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
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
  ...
```

### getPromiseState

**[→ Line 1765](./codewars.js#L1765)**

```javascript
function getPromiseState(promise) {
  return new Promise((resolve) => {
    promise.then(() => resolve('fulfilled'), () => resolve('rejected'));
    queueMicrotask(() => resolve('pending'));
  });
}
```

### getSignOfNum

**[→ Line 434](./codewars.js#L434)**

```javascript
const getSignOfNum = (x) => {
  return isNaN(+x) ? Number.NaN : +x == 0 ? 0 : +x < 0 ? -1 : 1;
};
```

### getYearDiff

**[→ Line 767](./codewars.js#L767)**

```javascript
const getYearDiff = (start, end = new Date()) => {
  return Math.trunc((
    (end.getTime() + (isLeapYear(end.getFullYear()) ? 864e5 : 0))
    - (start.getTime() + (isLeapYear(start.getFullYear()) ? 864e5 : 0))
  ) / 31_536e6);
};
```

### hash

**[→ Line 197](./codewars.js#L197)**

```javascript
const hash = (a) => {
  const m = {};
  for (const v of a) { m[v] = m[v] ? m[v] + 1 : 1; }
  return m;
};
```

### hasNum

**[→ Line 106](./codewars.js#L106)**

```javascript
const hasNum = (num, target) => String(num).includes(String(target));
const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));
```

### heapsPermute

**[→ Line 1453](./codewars.js#L1453)**

```javascript
const heapsPermute = (perm) => {
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
  ...
```

### HTMLGen

**[→ Line 1363](./codewars.js#L1363)**

```javascript
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
```

### inorder

**[→ Line 139](./codewars.js#L139)**

```javascript
const inorder = (arr) => arr.every((x, i) => i === 0 || (x > arr[i - 1] || x < arr[i - 1]));

```

### isAnagram

**[→ Line 443](./codewars.js#L443)**

```javascript
const isAnagram = (w) => {
  return w !== w.toLowerCase().split('').sort().join('');
};
```

### isEven

**[→ Line 1348](./codewars.js#L1348)**

```javascript
const isEven = (n) => !(n & 1);
function swapAdjacentBits(n) {
  let [a, b] = [n & 0xAA_AA_AA_AA, n & 0x55_55_55_55];
  a >>= 1;
  b <<= 1;
  return a | b;
}
```

### isLeapYear

**[→ Line 765](./codewars.js#L765)**

```javascript
const isLeapYear = (y) => ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0);

```

### isNum

**[→ Line 102](./codewars.js#L102)**

```javascript
const isNum = (num) => !isNaN(+num);
const gauss = (n) => n * (n + 1) / 2;
```

### isPerfectSq

**[→ Line 108](./codewars.js#L108)**

```javascript
const isPerfectSq = (n) => Math.sqrt(n) === Math.trunc(Math.sqrt(n));
const sumOfSquares = (n) => (n * ((n + 1) * (n * 2 + 1))) / 6;
```

### isPowerOfTwo

**[→ Line 441](./codewars.js#L441)**

```javascript
const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0;

```

### isPrime

**[→ Line 335](./codewars.js#L335)**

```javascript
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
```

### isPrime2

**[→ Line 1181](./codewars.js#L1181)**

```javascript
const isPrime2 = (n) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (!(n % i)) return false;
  }
  return n > 1;
};
```

### largestSubarrayIndex

**[→ Line 1062](./codewars.js#L1062)**

```javascript
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
```

### lazyChain

**[→ Line 1605](./codewars.js#L1605)**

```javascript
function lazyChain(arg, calls = []) {
  return {
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
  };
}
```

### LCM

**[→ Line 847](./codewars.js#L847)**

```javascript
const LCM = (a, b) => a * b / GCD(a, b);
const lcmRange = (m, n) => {
  return m > n
    ? lcmRange(n, m)
    : Array.from({ length: n - m + 1 }, (_, idx) => m + idx).reduce(LCM);
};
```

### lcmRange

**[→ Line 848](./codewars.js#L848)**

```javascript
const lcmRange = (m, n) => {
  return m > n
    ? lcmRange(n, m)
    : Array.from({ length: n - m + 1 }, (_, idx) => m + idx).reduce(LCM);
};
```

### lengthOfNum

**[→ Line 438](./codewars.js#L438)**

```javascript
const lengthOfNum = (n) => Math.trunc(Math.log10(Math.abs(n))) + 1;

```

### longestBouncyList

**[→ Line 987](./codewars.js#L987)**

```javascript
const longestBouncyList = (arr) => {
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
```

### longestComb

**[→ Line 1017](./codewars.js#L1017)**

```javascript
const longestComb = (arr, cmd = '<<') => {
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
  ...
```

### magicArray

**[→ Line 1877](./codewars.js#L1877)**

```javascript
const magicArray = (...args) => {
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
```

### matchBetween

**[→ Line 584](./codewars.js#L584)**

```javascript
const matchBetween = (left, right, str) => {
  function generateRegex(left, right) {
    return new RegExp(`(?<=${left})(.*?)(?=${right})`, 'g');
  }
  return str.match(generateRegex(left, right));
};
```

### mergeStrings

**[→ Line 478](./codewars.js#L478)**

```javascript
const mergeStrings = (a, b) => {
  let ov = '';
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    ov = (a.slice(a.length - i - 1) === b.slice(0, i + 1)) ? a + b.slice(i + 1) : ov;
  }
  return ov || a + b;
};
```

### mod

**[→ Line 82](./codewars.js#L82)**

```javascript
const mod = (n, m) => ((n % m) + m) % m;

```

### modtwo

**[→ Line 88](./codewars.js#L88)**

```javascript
const modtwo = (a, b) => {
  const r = a % Math.abs(b);
  return b === 0 ? undefined : r + ((r < 0 ? Math.abs(b) : 0) + (Math.min(b, 0)));
};
```

### mult

**[→ Line 136](./codewars.js#L136)**

```javascript
const mult = (arr) => arr.reduce((a, v) => a * v, 1);
const getmin = (arr) => arr.reduce((acc, val) => (Math.max(acc, val)), Infinity);
```

### myXOR

**[→ Line 1282](./codewars.js#L1282)**

```javascript
const myXOR = (x, y) => (x | y) & (~x | ~y);

```

### nextMultipleOfFive

**[→ Line 1667](./codewars.js#L1667)**

```javascript
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
```

### numPerm

**[→ Line 1424](./codewars.js#L1424)**

```javascript
function numPerm(arr) {
  let perm = 1;
  for (let i = 1; i <= arr.length; i++) {
    perm *= i;
  }
  return perm;
}
```

### objectDepthCount

**[→ Line 1842](./codewars.js#L1842)**

```javascript
const objectDepthCount = (obj) => {
  const isobj = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
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
```

### paginate

**[→ Line 213](./codewars.js#L213)**

```javascript
const paginate = (arr) => {
  arr.sort((a, b) => a - b);
  const res = []; let
    start = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      res.push([start, arr[i]]);
      start = arr[i + 1];
    }
  }
  return res.map((v) => (v[0] === v[1] ? v[0] : `${v[0]}-${v[1]}`)).join(', ');
};
```

### pascal

**[→ Line 1790](./codewars.js#L1790)**

```javascript
const pascal = (n) => {
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
```

### permutator

**[→ Line 1433](./codewars.js#L1433)**

```javascript
const permutator = (inputArr) => {
  const result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.splice(i, 1);
        permute([...curr], m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
};
```

### permute

**[→ Line 515](./codewars.js#L515)**

```javascript
const permuteMatrix = (arr) => {
  return arr.reduce((acc, sub) => acc * sub.reduce((acc, el) => acc.add(el), new Set()).size, 1);
};
```

### permuteArr

**[→ Line 555](./codewars.js#L555)**

```javascript
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
```

### permuteHeaps

**[→ Line 530](./codewars.js#L530)**

```javascript
const permuteHeaps = (permutation) => {
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
  ...
```

### permuteMatrix

**[→ Line 515](./codewars.js#L515)**

```javascript
const permuteMatrix = (arr) => {
  return arr.reduce((acc, sub) => acc * sub.reduce((acc, el) => acc.add(el), new Set()).size, 1);
};
```

### primeFactorSum

**[→ Line 423](./codewars.js#L423)**

```javascript
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
```

### Primes

**[→ Line 1158](./codewars.js#L1158)**

```javascript
class Primes {
  static * stream() {
    yield 2;
    let n = 3;
    while (true) {
      if (isPrime(n)) {
        yield n;
      }
      n += 2;
    }
  }
}
```

### PriorityQueue

**[→ Line 1697](./codewars.js#L1697)**

```javascript
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
```

### prog

**[→ Line 1418](./codewars.js#L1418)**

```javascript
const prog = (n, max, min) => {
  const terms = max - min + 1;
  return (terms / 2) * (2 * n * max - n * (terms - 1));
};
```

### proxyArr

**[→ Line 1926](./codewars.js#L1926)**

```javascript
const proxyArr = (arr) => {
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
```

### queueMonoIncr

**[→ Line 1492](./codewars.js#L1492)**

```javascript
const queueMonoIncr = (nums) => {
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
```

### recordDepth

**[→ Line 1827](./codewars.js#L1827)**

```javascript
function recordDepth(tree, depth = 0) {
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
}
```

### removeAdjacentDup

**[→ Line 1384](./codewars.js#L1384)**

```javascript
const removeAdjacentDup = (arr) => {
  return arr.filter((i, idx) => arr[idx - i] !== i);
};
```

### removeCharFromMatrix

**[→ Line 697](./codewars.js#L697)**

```javascript
const removeCharFromMatrix = (ma, char) => {
  for (let row = 0; row < ma.length; row++) {
    for (let col = 0; col < ma[row].length; col++) {
      if (ma[row][col] === char) ma[row].shift();
    }
  }
  return ma;
};
```

### removeDuplicatesInMatrix

**[→ Line 706](./codewars.js#L706)**

```javascript
const removeDuplicatesInMatrix = (arr) => {
  return arr.reduce((acc, sub) => {
    if (!acc.some((el) => el.join('') === sub.join(''))) {
      acc.push(sub);
    }
    return acc;
  }, []);
};
```

### removeElementsWithDuplicates

**[→ Line 291](./codewars.js#L291)**

```javascript
const removeElementsWithDuplicates = (arr) => {
  return arr.filter((v, j) => !arr.some((n, i) => j !== i && n === v));
};
```

### removeLastDigit

**[→ Line 1681](./codewars.js#L1681)**

```javascript
const removeLastDigit = (n) => {
  return n / 10 | 0;
};
```

### replaceObjectValueInPlace

**[→ Line 1806](./codewars.js#L1806)**

```javascript
const replaceObjectValueInPlace = (data, repl) => {
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
```

### reverseNum

**[→ Line 377](./codewars.js#L377)**

```javascript
const reverseNum = (n, r = 0) => {
  while (n > 0) r = r * 10 + (n % 10), n = Math.trunc(n / 10);
  return r;
};
```

### reverseNumber

**[→ Line 382](./codewars.js#L382)**

```javascript
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
```

### rotateArrayLeft

**[→ Line 1734](./codewars.js#L1734)**

```javascript
const rotateArrayLeft = (arr) => {
  arr.push(arr.shift());
  return arr.join('');
};
```

### roundRobin

**[→ Line 1](./codewars.js#L1)**

```javascript
Code not found
```

### simplifyParenthesesExpression

**[→ Line 1109](./codewars.js#L1109)**

```javascript
const simplifyParenthesesExpression = (s) => {
  const handleSign = (a, b) => ((a === '+' ? 1 : -1) * (b === '+' ? 1 : -1) === 1 ? '+' : '-');
  let str = '';
  let currSign = '+';
  const signs = [currSign];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[+-]/.test(char)) {
      currSign = char;
    } else if (/[()]/.test(char)) {
      if (char === '(') {
        signs.push(handleSign(signs.at(-1), currSign));
        currSign = '+';
      } else {
        signs.pop();
      }
    } else if (/[a-z]/i.test(char)) {
      const nxt = handleSign(signs.at(-1), currSign);
      str += (str.length === 0 && nxt === '+' ? '' : nxt) + char;
      currSign = '+';
    }
  ...
```

### slidingWindowBasic1

**[→ Line 268](./codewars.js#L268)**

```javascript
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
```

### smallestCommonFactor

**[→ Line 866](./codewars.js#L866)**

```javascript
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
  ...
```

### solveForX

**[→ Line 1685](./codewars.js#L1685)**

```javascript
const solveForX = (a, b, x) => {
  return (x - b) / a;
};
```

### sortAlph

**[→ Line 447](./codewars.js#L447)**

```javascript
const sortAlph = (arr) => arr.sort((a, b) => a.localeCompare(b));

```

### sortHash

**[→ Line 295](./codewars.js#L295)**

```javascript
const sortHash = (hash) => {
  return Object.keys(hash).sort().reduce((a, b) => {
    { a[b] = hash[b]; }
    return a;
  }, {});
};
```

### sortOddFirst

**[→ Line 449](./codewars.js#L449)**

```javascript
const sortOddFirst = (arr) => {
  return arr.sort((a, b) => {
    const [o1, o2] = [Math.trunc(a) % 2 !== 0, Math.trunc(b) % 2 !== 0];
    return (o1 && o2) ? a - b : o1 ? -1 : o2 ? 1 : b - a;
  });
};
```

### splitArrayEvenOdd

**[→ Line 629](./codewars.js#L629)**

```javascript
const splitArrayEvenOdd = (arr) => {
  return arr.reduce((a, b) => (b % 2 === 0 ? { ...a, e: [...a.e, b] } : { ...a, o: [...a.o, b] }), { e: [], o: [] });
};
```

### splitdel

**[→ Line 613](./codewars.js#L613)**

```javascript
function splitdel(inputString, leftDelimiter, rightDelimiter) {
  // Escape special characters in the delimiters for use in regex
  const escapeRegExp = (string) => string.replaceAll(/[$()*+.?[\\\]^{|}]/g, String.raw`\$&`);

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
```

### splitInParts

**[→ Line 592](./codewars.js#L592)**

```javascript
function splitInParts(s, partLength) {
  return s.match(new RegExp(`.{1,${partLength}}`, 'g')).join('\n');
}
```

### splitKeep

**[→ Line 597](./codewars.js#L597)**

```javascript
function splitKeep(str, delim) {
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
}
```

### splitString

**[→ Line 633](./codewars.js#L633)**

```javascript
const splitString = (str) => {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? [str.slice(0, mid), str.slice(mid)]
    : [str.slice(0, mid + 1), str.slice(mid)];
};
```

### standFib

**[→ Line 1219](./codewars.js#L1219)**

```javascript
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
```

### Stream

**[→ Line 1636](./codewars.js#L1636)**

```javascript
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
```

### sum

**[→ Line 109](./codewars.js#L109)**

```javascript
const sumOfSquares = (n) => (n * ((n + 1) * (n * 2 + 1))) / 6;
const triangularLineLength = (n) => {
  return Math.trunc(Math.sqrt(2 * n + 0.25) - 0.5);
};
```

### sumDigits

**[→ Line 147](./codewars.js#L147)**

```javascript
const sumDigits = (k) => {
  let sum = 0;
  if (k <= 0) return 0;
  while (k) {
    sum += k % 10;
    k = k / 10 | 0;
  }
  return sum;
};
```

### sumOfSquares

**[→ Line 109](./codewars.js#L109)**

```javascript
const sumOfSquares = (n) => (n * ((n + 1) * (n * 2 + 1))) / 6;
const triangularLineLength = (n) => {
  return Math.trunc(Math.sqrt(2 * n + 0.25) - 0.5);
};
```

### swap

**[→ Line 640](./codewars.js#L640)**

```javascript
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
```

### swap1sand0s

**[→ Line 1357](./codewars.js#L1357)**

```javascript
const swap1sand0s = (x) => {
  return x.replaceAll(/\d/g, (val) => val ^ 1);
};
```

### swapAdjacentBits

**[→ Line 1349](./codewars.js#L1349)**

```javascript
function swapAdjacentBits(n) {
  let [a, b] = [n & 0xAA_AA_AA_AA, n & 0x55_55_55_55];
  a >>= 1;
  b <<= 1;
  return a | b;
}
```

### swapArrElement

**[→ Line 640](./codewars.js#L640)**

```javascript
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
```

### swapNestedArrElement

**[→ Line 653](./codewars.js#L653)**

```javascript
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
```

### toBinary

**[→ Line 165](./codewars.js#L165)**

```javascript
function toBinary(k) {
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
  ...
```

### transposeMatrix

**[→ Line 1739](./codewars.js#L1739)**

```javascript
const transposeMatrix = (m) => {
  return m[0].map((_, i) => {
    return m.map((__, r) => m[r][i]);
  });
};
```

### triangularLineLength

**[→ Line 110](./codewars.js#L110)**

```javascript
const triangularLineLength = (n) => {
  return Math.trunc(Math.sqrt(2 * n + 0.25) - 0.5);
};
```

### wrapInd

**[→ Line 928](./codewars.js#L928)**

```javascript
const wrapInd = (len, diff) => (diff >= 0 ? diff : ((Math.abs(diff) <= len) ? len + diff : mod(diff, len)));

```

