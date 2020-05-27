// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural
// numbers and the square of the sum.

function sumSquareDifference(n) {
  // Good luck!
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  let set1 = numbers
    .map((num) => {
      return num * num;
    })
    .reduce((a, b) => {
      return a + b;
    });

  let set2 = Math.pow(
    numbers.reduce((a, b) => {
      return a + b;
    }),
    2
  );

  console.log(set1);
  console.log(set2);
  return set2 - set1;
}

sumSquareDifference(100);
