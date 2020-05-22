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
