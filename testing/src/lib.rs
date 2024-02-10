use wasm_bindgen::prelude::*;


// Exporting the function to JavaScript
#[wasm_bindgen]
pub fn wasm_sieve(limit: usize) -> Vec<usize> {
    // Create a boolean vector to track whether each number is prime
    let mut is_prime: Vec<bool> = vec![true; limit + 1];
    // 0 and 1 are not prime numbers
    is_prime[0] = false;
    is_prime[1] = false;
    // Iterate through the numbers starting from 2
    for i in 2..=(limit as f64).sqrt() as usize {
        if is_prime[i] {
            // Mark multiples of the current prime number as not prime
            for j in (i * i..=limit).step_by(i) {
                is_prime[j] = false;
            }
        }
    }
    let primes: Vec<usize> = (2..=limit).filter(|&i| is_prime[i]).collect();
    primes
}
