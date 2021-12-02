//The question is to find the largest prime factor of a given number.
//The number is passed as an argument to the function. 600851475143

function largestPrimeFactor(num) {
    var largest = 0; // Initialize largest to 0
    for (var i = 2; i < num; i++) { // Loop from 2 to num
        if (num % i === 0) { // If num is divisible by i
            if (isPrime(i)) { // If i is prime
                largest = i;// Set largest to i
            }
        }
    }
    return largest;
}

function isPrime(num) { // Function to check if a number is prime
    
    for (var i = 2; i < num; i++) { // Loop from 2 to num
        if (num % i === 0) { // If num is divisible by i
            return false; // Return false
        }
    }
    console.log("Prime: " + num); // Print prime number
    return true; // Return true
}

console.log(largestPrimeFactor(600851475143));