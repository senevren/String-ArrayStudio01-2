let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
let newStra = str.slice(0,3);
let newStra2 = str.slice(3);
let ulTrastr= (newStra2 + newStra);
console.log(ulTrastr)
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

liTeral = `We used ${str} for the old version and used ${ulTrastr} for the new one`
console.log(liTeral);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const input = require('readline-sync');
let info = input.question("Please enter the numbers: ");
console.log(info);
let partOne = str.slice(0,info);
let partTwo = str.slice(info);
let mergeThree= (partTwo + partOne);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (info > str.length) {
  console.log("Please enter a digit between 0 and 10: ");
}
else {
  console.log(mergeThree);
}