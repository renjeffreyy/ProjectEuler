// A palindromic number reads the same both ways.
// The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
  // Good luck!

  const max = Math.pow(10, n) - 1;
  const min = Math.pow(10, n - 1);
  const array = [];

  console.log(min, max);
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const test = i * j;
      const stringArray = test.toString().split('');
      // console.log(test)
      // console.log(stringArray)
      // console.log(stringArray.reverse())

      if (test == Number(stringArray.reverse().join(''))) {
        array.push(test);
        break;
      }
    }
  }
  return Math.max(...array);
  // console.log(array)
}

largestPalindromeProduct(3);
