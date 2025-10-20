function getPrimesOptimized(limit) {
    if (limit < 2) return [];
    
    const size = Math.floor((limit - 1) / 2);
    const sieve = new Array(size + 1).fill(true);
    
    // Handle 2 separately since it's the only even prime
    const primes = [2];
    
    for (let i = 1; i <= size; i++) {
        if (sieve[i]) {
            const prime = 2 * i + 1;
            primes.push(prime);
            
            // Mark multiples of the current prime
            for (let j = i + prime; j <= size; j += prime) {
                sieve[j] = false;
            }
        }
    }
    
    return primes;
}

const primes = getPrimesOptimized(999999);
console.log(`Found ${primes.length} primes under 1,000,000`);