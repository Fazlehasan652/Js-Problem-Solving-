// Problem 1:
// Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.

function calculateStrikeRate(runs, balls) {
        let stricckRate = (runs/balls)*100
        return stricckRate.toFixed(2) 
}

let result1 = calculateStrikeRate(45,30);
console.log(result1);
let result2 = calculateStrikeRate(100,60);
console.log(result2);
let result3 = calculateStrikeRate(25,40);
console.log(result3);
