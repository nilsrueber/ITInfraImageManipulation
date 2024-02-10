import init, { wasm_sieve } from './testing/pkg/testing.js';
// calling SoE in JS

const funcs = {"Sieve_of_Eratosthenes": [js_sieve,wasm_sieve]}
const rust_js = ["JavaScript", "Rust"];

document.addEventListener("DOMContentLoaded", function () {
    init();
    console.log("Loaded");
    for(const [key, value] of Object.entries(funcs)) {
        const button = document.createElement("button");
        button.textContent = key;
        button.addEventListener("click", () => {
            const input = prompt("Input:");
            for (let i = 0; i < 2; i++) {
                const startTime = performance.now();
                const output = value[i](input);
                const endTime = performance.now();
                console.log(output);
                const elapsedTime = endTime - startTime;
                console.log(`Function ${key}, ${rust_js[i]} with input ${input} took ${elapsedTime/1000} seconds to execute`);
            }
        });
        document.body.appendChild(button);
    }
});


// SoE in JS
function js_sieve(limit) {
    const sieve = new Array(Number(limit) + 1).fill(true);
    // 0 and 1 are not prime numbers
    sieve[0] = sieve[1] = false;
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i ** 2; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    return sieve.reduce((out, bool, index) => bool ? out.concat(index) : out, [])
}