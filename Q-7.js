//Problem 7:
//Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.

let Student_names = [
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Adnan",
  "Faiyaz",
];
function removeDuplicates(studentNames) {
  // Ensure valid input (an array)
  if (!Array.isArray(studentNames)) {
    return "Invalid input: Please provide an array of names";
  }

  const uniqueNames = [];
  const nameMap = {};

  // Iterate through the input array using a normal for loop
  for (let i = 0; i < studentNames.length; i++) {
    const name = studentNames[i];

    // Check if the name is not already in the nameMap
    if (!nameMap[name]) {
      // Add the name to the uniqueNames array
      uniqueNames.push(name);
      // Mark the name as seen in the nameMap
      nameMap[name] = true;
    }
  }

  return uniqueNames;
}
let data = removeDuplicates(Student_names);
console.log(data);

// Other Method

function removeDabuleName(names) {
  return [...new Set(names)];
}

let sortName = removeDabuleName([
  "Zara",
  "Sadia",
  "Mahin",
  "Adnan",
  "Maisha",
  "Adnan",
  "Faiyaz",
]);

console.log(sortName);
