//Problem 2:
//Have the function CountPairs take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.
// Study Details
function CountData(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i += 2) {
    // i = 0  0 < 11 true
    // i 0 + 2 = 2  2 < 11 true
    // i 2 + 2 = 4  4 < 11 true
    // i 4 + 2 = 6  6 < 11 true.................
    // i 10 + 2 = 12  12 < 11 flase

    // console.log(str.length - 1);
    const element = str[i + 1];
    // console.log(str[i + 1]);
    // i (index) = 0  value = 0
    // 0 + 1 = 1  String value = 1
    // 2 + 1 = 3  String value = 2
    // 4 + 1 = 1  String value = 3
    // 6 + 1 = 7  String value = 4
    // 8 + 1 = 9  String value = 5
    // 10 + 1 = 11  String value = 6

    if (element % 2 == 0) {
      count++;
    }
  }
  return count;
}

let result = CountData("a1b2c3d4e5f6");
console.log(result);


// Problem Solving Function 


function CountPair(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i += 2) {
    const element = str[i + 1];

    if (element % 2 == 0) {
      count++;
    }
  }
  return count;
}

let result1 = CountPair("a1b2c3d4e5f6");
console.log(result1);
let result12 = CountPair("x1y2z3");
console.log(result12);
let result13 = CountPair("a2b2c2d2");
console.log(result13);
