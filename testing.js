
function sieveOfEratosthenes(n) {
  // Create a boolean array "prime[0..n]" and initialize
  // all entries it as true. A value in prime[i] will
  // finally be false if i is Not a prime, else true.
    let prime = new Array(n + 1).fill(true);
    count = 0;
    for (let p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a prime
        count += 1;
        if (prime[p] === true) {
      // Update all multiples of p
            for (let i = p * p; i <= n; i += p) {
            prime[i] = false;
            }
        }
    }
    // print all prime numbers to html page
    for (let i = 2; i <= n; i++) {
        if (prime[i] === true) {
            document.write(i + " ");
        }
    }
}