// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2

// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  for (let c = 3; c < n; c++) {
    let c2 = c * c;

    for (let a = 1; a < n; a++) {
      for (let b = 2; b < c; b++) {
        if (a + b + c > n) {
          break;
        }

        let ab = a * a + b * b;
        if (c2 === ab && a + b + c === n) {
          console.log('a is ', a, 'b is ', b, 'c is ', c);
          return a * b * c;
        }
      }
    }
  }
}

specialPythagoreanTriplet(24);
