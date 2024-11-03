//* Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challange = "30 Days Of Javascript";

//* Print the string on the browser console using console.log()

console.log(challange);

//* Print the length of the string on the browser console using console.log()

console.log(challange.length);

//* Change all the string characters to capital letters using toUpperCase() method

console.log(challange.toUpperCase());

//* Change all the string characters to lowercase letters using toLowerCase() method

console.log(challange.toLocaleLowerCase());

//* Cut (slice) out the first word of the string using substr() or substring() method

console.log(challange.substring(0, 2));

//* Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challange.substring(3, 21));

//* Check if the string contains a word Script using includes() method

console.log(challange.includes("Script"));

//* Split the string into an array using split() method

console.log(challange.split(", "));

//* Split the string 30 Days Of JavaScript at the space using split() method

console.log(challange.split(","));

//*'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
//* split the string at the comma and change it to an array.

let arr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(arr.split(","));

//* Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let string = "30 Days Of JavaScript";
console.log(string.replace("JavaScript", "Python"));

//* What is character at index 15 in '30 Days Of JavaScript' string, Use charAt() method.

let string1 = "30 Days Of JavaScript";
console.log(string1.charAt(15));

//* What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let string2 = "30 Days Of JavaScript";
console.log(string2.charCodeAt(11));

//* Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(string2.indexOf("a"));

//* Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(string2.lastIndexOf("a"));

//* Use indexOf to find the position of the first occurrence of
//* the word because in the following sentence:
//* 'You cannot end a sentence with because because because is a conjunction'

let string3 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string3.lastIndexOf("because"));

//* Use lastIndexOf to find the position of the last occurrence
//*of the word because in the following sentence:
//*'You cannot end a sentence with because because because is a conjunction'

//* Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//* Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let string7 = " 30 Days Of JavaScript ";
console.log(string7.trim());

//* Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let string10 = "30 Days Of JavaScript";
console.log(string10.startsWith("30 Days Of JavaScript"));

//* Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let string9 = "30 Days Of JavaScript";
console.log(string9.endsWith("30 Days Of JavaScript"));

//* Use match() method to find all the a’s in 30 Days Of JavaScript

let string8 = "30 Days Of JavaScript";
console.log(string8.match(/a/gi));

//* Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let string5 = "30 Days";
let string6 = "JavaScript";
console.log(string5.concat(" " + string6));

//* Use repeat() method to print 30 Days Of JavaScript 2 times

let string4 = "30 Days Of JavaScript";
console.log(string4.repeat(2));
