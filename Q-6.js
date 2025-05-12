//Problem 6:
//Write a function called findShortestWord that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.

function findShortestWord(str) {
  let strArray = str.split(" ");
  let shortest = strArray[0];
  for (let i = 0; i < strArray.length; i++) {
    if (shortest.length > strArray[i].length) {
      shortest = strArray[i];
      // console.log(shortest)
    }
  }
  return shortest;
}
let result = findShortestWord("Today is Monday");
console.log(result);
let result1 = findShortestWord("The quick brown fox jumps over the lazy dog");
console.log(result1);
let result2 = findShortestWord("Hello world");
console.log(result2);
let result3 = findShortestWord(
  "Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded  a student’s name twice."
);
console.log(`Result is empty "${result3} " String lenght is 0 `);
console.log(result3.length);
