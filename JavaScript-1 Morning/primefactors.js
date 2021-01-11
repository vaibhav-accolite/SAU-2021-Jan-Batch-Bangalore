function isPrime(number)
{
    for(let i = 2; i <= Math.sqrt(number);i++){
        if(number % i === 0)
            return false;
    }

    return true;
}

function primeFactors(number)
{
    var ans = [];
    for(let i = 2; i <= number;i++) {
        while(isPrime(i) && number % i === 0)
        {
            if(!ans.includes(i))
                ans.push(i);
            number /= i;
        }
    }

    return ans;
} 

console.log(primeFactors(158));
console.log(primeFactors(95));
console.log(primeFactors(168));
