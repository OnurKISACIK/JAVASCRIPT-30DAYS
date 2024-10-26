//* ------------------------  STRINGS METHODS ----------------------------*/

//* EVERYTHING IN JAVASCRIPT IS AN OBJECT A STRING IS
//* PRIMITIVE DATA TYPES THAT CAN NOT MODIFY IT ONCE IS CREATED
//* THE STRING OBJECT HAS MONAY METHODS. tHEY ARE DIFFERENT
//* STRING METHODS THAT CAN HELP US TO WORK WITH STRINGS

//* -------------------------------------------------------------------*/

//* 1- .LENGTH

//* THE STRING LENGTH METHOD RETURNS
//* THE NUMBER OF CHARACTERS IN A STRING INCULUDED EMTY SPACES

let js = "Java Script";
console.log(js.length);

console.log("HEllo world");

//! IT CALCULATES ALL THE LETTERS + EMPTY SPACES ( )

//* -------------------------------------------------------------------*/

//* 2- ACCESSING CHARACTERS IN A STRING

//* WE CAN ACCESS EACH CHARACTER IN A STRING USING ITS INDEX IN PROGRAMING
//* COUNTING STARTS FROM "0"  THE FIRST INDEX OF THE STRING  IS ZERO, AND
//* SECOND INDEX IS "1"... LAST INDEX IN THE LENGHTS OF STRING "-1"

let string = "javascript";
let firstletter = [0];
console.log(firstletter);

//? j

let string1 = "JavaScript";
let lastLetter1 = string.length - 1;
console.log(lastLetter1);
console.log(string1[lastLetter1]);

//? 9
//? t

let cars = "volswagen";
let length = cars.length - 1;
console.log(cars[length]);

//? n

//* -------------------------------------------------------------------*/

//* 3- .toUpperCase()

//* THIS METHOD CHANGES THE STRINGS TO UPPERCASE LETTERS

let letter2 = "butun harfleri kucuk bir sekilde girdik";
console.log(letter2.toUpperCase());

//? BUTUN HARFLERI KUCUK BIR SEKILDE GIRDIK

//*-------------------------------------------------------------------*/

//* 4- .toLowerCase()

//* THIS METHOD CHANGES THE STRINGS TO LOWER LETTERS

let letter3 = "BuraDa BagZI HarfLER BUyUK";
console.log(letter3.toLowerCase());

//? burada bagzi harfler buyuk

//*-------------------------------------------------------------------*/

//* 5- .substring(#,#)

//* IT TAKES TWO ARGUMENTS, THE STARTING INDEX AND NUMBER OF CHARACTERS TO SLICE

let string2 = "the world is mine";
console.log(string2.substring(4, 9));

//? world

let string3 = "we love to listen music,and you?";
console.log(string3.substring(7, 17));

//? to listen

//! FIRST DIGIT IN ARGUMENTS STARTING POINT AND SECOND DIGIT IS A FINISH POINT

//*-------------------------------------------------------------------*/

//* 6- .split()

//* THIS SPLIT METHOD A STRING AT THE SPECIFIED PLACE

let string4 = "30 Days Of JavaScript";
console.log(string4.split());

//! IF WE LEFT THE BRELETS EMPTY THAN OUT COME AS ARRAY

//? ['30 Days Of JavaScript']

console.log(string4.split(""));

//? ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O','f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//! IF WE USE IN SIDE THE BREKETS DOUBLE QUOTE WITHOUT SPACE ("") THAN IT SPERATES ALL TEH LETTERS
//! AND RETURNS ARRAY

console.log(string4.split(" "));

//?['30', 'Days', 'Of', 'JavaScript']

//! IF WE USE BREAKETS WITH (" ") DOUBLE QUOTES WITH SPACE
//! THAN IT RETURNS SPLITTING EACH WORD BY WORD INSIDE TEH ARRAY

console.log(string4.split(","));

//? ['30 Days Of JavaScript']

//*-------------------------------------------------------------------*/

//* 7- .trim()

//* REMOVES TRALLING SPACES IN THE BEGGINING OR IN THE END OF THE STRING

let string5 = "     30 Days Of JavaScript   ";
console.log(string5.trim());

//? 30 Days Of JavaScript

//! REMOVING THE SPACES IN THE BEGGINING AND IN THE END

//*-------------------------------------------------------------------*/

//* 8- .includes()

//* IT TAKE A SUBSTRING ARRGUMEMNT AND IT CHECKS IF SUBSTRING ARGUMENT EXITS IN THE STRING

//* IF THE SUBSTRING EXIST THAN RETURN "TRUE" BOOLEAN
//* IF THERE IS NOTING FROM THIS SUBTRING RETURN "FALSE"

let string6 = "30 Days Of JavaScript";
console.log(string6.includes("Of"));
console.log(string6.includes("JavaScript"));
console.log(string6.includes("days"));

//? TRUE
//? TRUE
//? FALSE

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 9- .replace(), .replaceAll()

//* TAKE AS A PARAMETER THE OLD SUBSTRING AND A NEW SUBSTRING

let string7 =
  "Hello John, How are you today?, do you wanna come with us to park";
console.log(string7.replace("John", "David"));

//? Hello David, How are you today?, do you wanna come with us to park

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

let string8 = "Hello David, How is David today?,David is going to come? ";
console.log(string8.replaceAll("David", "Tim"));

//? Hello Tim, How is Tim today?,Tim is going to come?

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 10- .charAt()

//* TAKE INDEX AND IT RETURN THE VALUE AT THAT INDEX

let string9 = "30 Day of JavaScript";
let lastIndex = string9.length - 1;
console.log(string9.charAt(lastIndex));

//* 11- .indexOf();

//* TAKE SUBSTRING AND IF THE SUBSTRING IN A STRING ,
//* IT RETURNS FIRST POSITION OF THE SUBSTRING IF DOES NOT EXIST IT RETURN "-1"

let string10 = "30 Day of JavaScript";
console.log(string10.indexOf("D"));

//? 3

console.log(string10.indexOf("O"));

//? -1 (WE DO NOT HAVE BIG LETTER "O" THATS WHY RETURNS "-1")

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 12- .concat() --> .concat("fin");

//* IT TAKES MANY SUBSTRINGS AND JOINS THEM TOGETHER
let string11 = "30";
console.log(string11.concat("Days", "of", "Java", "Script"));

//? 30DaysofJavaScript

//*-------------------------------------------------------------------*/

//* 13- .lastIndexOf()

//* TAKES A SUBSTRING AND IF THE SUBSTRING EXIST IN A STRING
//* IT RETURNS THE LAST POSITION OF THE SUBSTRING
//* IF IF DOES NOT EXIST RETURNS "-1"

let string12 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string12.lastIndexOf("love"));

//? 67 (LAST LOVE WORD STARTS IN INDEX NUMBER 67)

console.log(string12.lastIndexOf("If"));

//? 19

console.log(string12.lastIndexOf("You"));

//? -1 ( WE HAVE you  WE DO NOT HAVE WITH BUG LETTERS YOU THATS WHY RETURN -1)

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 14- .startsWith()

//* IT TAKES A SUBSTRING AS AN ARGUMENT AND
//* IT CHECKEDS IF THE STRING STARTS WITH THAT SPECIFIED SUBSTRING

let string13 = "Love is the best to in this planet";
console.log(string13.startsWith("Love"));

//? TRUE

console.log(string13.startsWith("love"));

//? FALSE

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 15- .endsWith()

//* IT TAKES SUBSTRING AS AN ARGUMENT AND CHECKED THE STRING ENDS
//* WITH TAHT SPESIFIED SUBSTRING IT

//! IT RETURNS A BOOLEAN TRUE OR FALSE

let string14 = "Love is the most powerfull feeling in the world";
console.log(string14.endsWith("world"));
console.log(string14.endsWith("most"));
console.log(string14.endsWith("in the world"));

//? TRUE
//? FALSE
//? TRUE

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/

//* 16- .search();

//* TAKES A SUBSTRING AS AN ARGUMENT AND IT RETURNS THE INDEX OF THE FIRST MATCH
//*SEARCH VALUE CAN BE A STRING OR REGULAR EXPRESSION PATTERN.

let string15 = " I love you more than everything";
console.log(string15.search("you"));

//? 8
console.log(string15.search("Love"));

//? -1 (Love IS NOT STARTING WITH BUG LETTER L)

console.log(string15.search(/love/gi));

//? 3

//* g --> search in whole string!!!
//* i --> case insensitive!!! (characters can be big or small)

//! UPPER AND LOWER LETTERS MAKE DIFFERENCE FOR THE RESULT

//*-------------------------------------------------------------------*/
//*************************************** */
//* 17- .match()

//* IT TAKES SUBSTRING OR REFULAR EXPRESSION PATTERN AS AN ARGUMENT ANS IT RETURN AN ARRAY
//* IF THERE IS A MATCH IF NOT RETURN -1

let string16 =
  "I love JavaScript. If you do not Love JavaScript what else can you love.";
console.log(string16.match("love"));

//? RETURN AS ARRAY WHOLE TEX

let pathern = /love/gi;
console.log(string16.match(pathern));

//? ['love', 'love', 'love']

let pathern2 = /love/g;
console.log(string16.match(pathern2));

//*************************************** */
//*-------------------------------------------------------------------*/

//* 18- .repeat()

//* IT TAKE A NUMBER AS ARGUMENT AND IT RETURN THE
//* THE REPEATED VERSION OF THE STRING

let string17 = "Love";
console.log(string17.repeat(2));

//? LoveLove
