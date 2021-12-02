/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//Firstly, we should put a loop and this loop should start 1000 and every step, loop should decrease by one
//If new number; num % 3 == 0 or num % 5 == 0 => total+=num;


function multiple_3_or_5(){

    let total = 0; //We are defining the total variable.

    counter = 999; //This counter will decrease from one thousand.

    while(counter > 2){

        if(counter % 3 == 0 || counter % 5 == 0){
            total+=counter;
        }

        --counter; //We are decreasing the counter by one
    }


    return total;
}

console.log("Result: " + multiple_3_or_5());