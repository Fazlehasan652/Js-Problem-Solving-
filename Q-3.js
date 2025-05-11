// Problem 3:
//Write a function called reverseString that takes a string as input and returns the reverse of that string. Your function should not use the built-in reverse() method.

function reverseString(str) {
  let strArray = str.split("");
  //   console.log(strArray)
  for (let i = 0; i < strArray.length; i++) {
    for (let j = i; j < strArray.length; j++) {
      let temp;
      temp = strArray[i];
      strArray[i] = strArray[j];
      strArray[j] = temp;
    }
  }
  return strArray.join("")
//   return strArray.toString().replaceAll(",", "");
}

let result1 = reverseString("hello");
console.log(result1);
let result2 = reverseString("racecar");
console.log(result2);
let result3 = reverseString("12345");
console.log(result3);
