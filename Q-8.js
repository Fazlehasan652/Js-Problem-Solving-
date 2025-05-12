//Problem 8:
//You are giving a book stall at Dhaka International book fair and need to create a list of books to be featured at the event.

'use strict'

// Arrays to store book information
let bookTitles = ["ygfytf"];
let authorNames = [];
let copiesAvailable = [];

// Function to create a new book entry
function createBookList(title, author, copies) {
    bookTitles.push(title);
    authorNames.push(author);
    copiesAvailable.push(copies);
}

// Function to add copies of a book
function addCopies(bookTitle, additionalCopies) {
    const index = bookTitles.indexOf(bookTitle);
   

    if (index !== -1) { // 0 not -1 = true
        copiesAvailable[index] += additionalCopies;
        console.log(`Added ${additionalCopies} copies to ${bookTitle}.`);
    } else {
        console.log(`Book not found: ${bookTitle}`);
    }
}

// Function to sell copies of a book
function sellBook(bookTitle, soldCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        if (copiesAvailable[index] >= soldCopies) {
            copiesAvailable[index] -= soldCopies;
            console.log(`Sold ${soldCopies} copies of ${bookTitle}.`);
        } else {
            console.log(`Not enough copies available for ${bookTitle}.`);
        }
    } else {
        console.log(`Book not found: ${bookTitle}`);
    }
}

// Function to get details of all books
function getDetails() {
    for (let i = 0; i < bookTitles.length; i++) {
        console.log(`"${bookTitles[i]}" by "${authorNames[i]}" - Copies available: ${copiesAvailable[i]}`);
    }
}

// Sample usage:
createBookList('Bohubrihi', 'Humayun Ahmed', 10);
addCopies('Bohubrihi', 5);
sellBook('Bohubrihi', 3);
getDetails();