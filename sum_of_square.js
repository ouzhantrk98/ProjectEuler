//The question is to find the difference of sum of squares and square of sum of first 100 natural numbers.

//Firstly, we have to find the sum of square of first 100 natural numbers.
function sumOfSquare(num) {
    var sum = 0; //sum variable
    while(num > 0){ //loop to find sum of square of first 100 natural numbers
        sum += Math.pow(num, 2);
        num--;
    }

    return sum;
}

//Then, we have to find the square of sum of first 100 natural numbers.
function squareOfSum(num) {
    var sum = 0;
    while(num > 0){
        sum += num;
        num--;
    }
    return Math.pow(sum, 2);
}

let difference = squareOfSum(100) - sumOfSquare(100);
console.log(difference);