//Problem 4:
//Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

function isPalindrome(string){
    let toReversedData = string.split("").reverse().join("")
    console.log(toReversedData)
    return (string === toReversedData) ? true : false
}

let result = isPalindrome("racecar")
console.log(result)
let result1 = isPalindrome(("hello"))
console.log(result1)
let result2 = isPalindrome("rotator")
console.log(result2)
let result4 = isPalindrome("peep")
console.log(result4)