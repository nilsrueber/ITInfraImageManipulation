import init, { wasm_sieve } from './testing/pkg/testing.js';

// calling SoE in JS
function sieveCallerJS() {
    const limit = prompt("Enter the limit for finding primes:");
    const primes = sieveOfEratosthenes(limit);
    alert(`JavaScript Primes: ${primes.join(', ')}`);
}

// SoE in JS
function sieveOfEratosthenes(limit) {
    const sieve = Array.from({ length: limit + 1 }, (_, i) => i >= 2);
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i ** 2; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    return sieve.reduce((primes, isPrime, i) => isPrime ? [...primes, i] : primes, []);
}

// calling SoE in Rust
init().then(() => {
    function sieveCallerWASM() {
        // Call the Rust WASM function here
        alert("Calling Rust WASM Sieve. Check the console for results.");
        const limit = prompt("Enter the limit for finding primes:");
        const primes = wasm_sieve(limit);
        alert(`Rust Primes: ${primes.join(', ')}`);
    }
});
