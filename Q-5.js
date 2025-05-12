//Problem 5:
//Write a function mergeArrays that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.

const ar1 = [1, 3, 5, 7];
const ar2 = [2, 4, 6, 8];

// Primitive Process

let a = [1, 2, 3, 5, 9];
let b = [4, 6, 7, 8];

function mergeSortedArray(a, b) {
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  // console.log(a);      //Create single Array a = [1, 2, 3, 5, 9, 4, 6, 7, 8]

  for (let i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp;
        temp = a[i];
        // console.log(temp)
        a[i] = a[j];
        a[j] = temp;
        // console.log(a[j]);
      }
    }
  }
  return a;
}

let res1 = mergeSortedArray(a, b);
console.log(res1);
let res2 = mergeSortedArray(ar1, ar2);
console.log(res2);

//.................................................................................
// Function to merge two arrays and sort the result
function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3.sort((a, b) => a - b);
    return arr3;
}

// Driver code
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let arr3 = mergeArrays(arr1, arr2);

console.log(arr3.join(" "));


//.................................................................................
// Other Method 
let a1=[1,2,3,5,9]
let b1=[4,6,7,8]

let newArray=[...a1,...b1].sort()
console.log(newArray)