//* ------------------------  STRINGS  ----------------------------*/

//* STRINGS ARE TEXTS. WHICH ARE UNDER
//* SINGLE QUOTES (''), DOUBLE QUOTES (""), BACKTICKS(``)
//* TO DECLARE A STRING WE NNED A VARIABLE NAME , ASSIGNMENT OPERATOR
//* A VALUE UNDER A SINLE, DOUBLE OR BACKTICKS QUOTES

let space = " ";
let firstName = "john";
let lastName = "Wick";
let country = "USA";
let quote = "The saying.`seeing is believing ` is not correct in 2020";

//* ------------------------  STRINGS CONCATENATION  ----------------------------*/

//* CONNECTION TWO OR MORE STRINGS TOGERHER IS CALLES
//* CONCATENATION USING THE STRINGS DECLERED IN THE PREVIOUS STRING SECTION

let cars = "Bmw";
let cars1 = "Audi";
let space1 = " ";
console.log(cars + space1 + cars1);

//* CONCATENATION MERGING TWO STRINGS TOGETHER WE CAN CONCATENATING USING ADDITIONS OPERATOR

//* -------------------------------------------------------------------*/

//* ------------ LONG LITERAL STRINGS  --------------*/

//* IF WE HAVE LONG TEXT AND IF IT WILL BE NOT FIT THE LINE WE CAN USE THE BACKSLASH (\)

//* -------------------------------------------------------------------*/

//* ------------ ESCAPE SEQUENCES IN STRINGS  --------------*/

//* IN JAVASCRIOT AND OTHER PROGRAMIN LANGUAGES "\" FOLLOWED
//* BY SOME CHARACTERS IS ESCAPE SQUANCE

//* - \n (NEW LINE)
//* - \t (TAB IT GIVES 8 SPACES)
//* - \\ (BACK SLASH)
//* - \* (SINGLE QUOTE)
//* - \" (DOUBLE QUOTE)

console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
);
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("This is a backslash  symbol (\\)");

//* ------------ TEMPLATE LITERALS(TEMPLATE STRINGS)  --------------*/

//* TO GENERATE A TEMPLATE TRING , WE USE TWO BACKTICKS (``)
//* WE CAN INJECT DATA EXPRESSIONS INSIDE A TEMPLATE STRING.
//* TO INJECT DATA , WE ENCLOSE THE EX[RESSION WITH CURLYBRAKETS ({})
//* PRECEDED BY A ($)SIGN

let name1 = "john";
let lastName1 = "Mike";
console.log(`${name1 + lastName1}`);

//? JohnMike

//! WHEN WE CHANGE THE VARIABLES IT CHANGE ALSO IN CONSOLE LOG DINAMICLY
//! IT WORK IF THE STRING ONLY WITHIN BACKTICK

let model = "Audi";
let year = 2020;
console.log(`${model + year}`);

//? Audi2020

let a = 3;
let b = 2;
console.log(`a+b=${a + b}`);

//? a+b=5

let firstName1 = "Angela";
let lastName2 = "Lopez";
let country1 = "Bulgaria";
let age = 25;
let space2 = " ";
console.log(
  `${firstName1}${space2}${lastName2}${space2}${country1}${space2}${age}`
);

//? Angela Lopez Bulgaria 25

//* USING A STRING TEMPLATE OR STING INTERPOLATION
//* METHOD, WE CAN ADD EXPRESSION , WHICH COULD BE VALUE OR SOME OPERATIONS
//* (COMPARISON, ARITHMATICS, OPERATIONS, TERNARY OPERATIONS)

let c = 3;
let d = 4;
console.log(`${d} bigger than ${c}:${d > c}`);

//? 4 bigger than 3:true
