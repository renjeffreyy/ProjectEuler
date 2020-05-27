// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  // Good luck!
  let start = 1;

  const divisors = [];
  while (start <= n) {
    divisors.push(start);
    start++;
  }

  let answer = 1;
  let on = 0;

  while (on < n) {
    for (let i = 0; i < divisors.length; i++) {
      if (answer % divisors[i] > 0) {
        answer++;
        on = 0;
        break;
      }
      on++;
    }
  }
  return answer;
}

smallestMult(5);
