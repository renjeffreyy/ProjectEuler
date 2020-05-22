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
