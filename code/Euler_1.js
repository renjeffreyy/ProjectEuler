// Project Euler: Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  // Good luck!
  let i = 0;
  let multiples = [];
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  return multiples.reduce((a, b) => a + b);
}

multiplesOf3and5(1000);
