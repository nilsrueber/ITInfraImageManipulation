use wasm_bindgen::prelude::*;

// Exporting the function to JavaScript
#[wasm_bindgen]
pub fn rust_wasm_sieve(limit: u32) -> Vec<u32> {
    let mut sieve = vec![true; (limit + 1) as usize];
    let mut primes = Vec::new();

    for i in 2..=(limit as f64).sqrt() as u32 {
        if sieve[i as usize] {
            primes.push(i);
            for j in (i * i..=limit).step_by(i as usize) {
                sieve[j as usize] = false;
            }
        }
    }

    primes.extend((sieve.len() as u32 - 1).saturating_sub(limit)..(sieve.len() as u32));
    primes
}
