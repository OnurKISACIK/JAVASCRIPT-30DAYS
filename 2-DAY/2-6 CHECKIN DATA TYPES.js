//* ------------------- CHECKING DATA TYPES AND CASTING ---------------------------*/

//* CHECKING THE DATA TYPES WITH "typeof"
let js1 = 5;
let js2 = "Ali";
let js3 = null;
console.log(typeof js1);
console.log(typeof js2);
console.log(typeof js3);

//? NUMBER

//? STRING

//? OBJECT

//*-------------------------------------------------------------------*/

//* ------------------- CHANGING THE DATA TYPES --------------------*/

//* CASTING CONVERTING ONE DATA TYPE TO ANOTHER DATA TYPE

//* - parseInt()
//* - parseFloat()
//* - Number
//* - +(Sign)
//* - str

//* WHEN WE DO ARITHMATIC OPERATIONS STRING
//* NUMBERS SHOULD BE FIRST CONVERTED TO INTEGER OR GLOAT IF NOT IT RETURNS AN ERROR

//*   ---------  STRING TO INT  ---------*/

//* WE CAN COOVERT THE STRING NUMBERS TO NUMBERS
//* ANY NUMBER WITHIN QUOTES IT IS A STRING NUMBER
//* "5"

//* WE CAN CONVERT THE STRING NUMBERS TO NORMAL NUMBERS WITH BELOW METHODS

//* parseInt()
//* Number
//* +(Sign)

let num6 = "5";
console.log(parseInt(num6));

//? 5

let num7 = "10";
console.log(Number(num7));

//? 10

let num9 = "8";
console.log(+num9);

//? 8

//* - .parseInt()

//* CONVERTS A DECIMAL NUMBER TO WHOLE NUMBER

let num10 = 3.956;
console.log(parseInt(num10));

//? 3

//*-----------------   STRING TO FLOAT   ---------------*/

//* WE CAN CONVERT TO STRING NUMBERS TO FLOAT NUMBER
//* ANY FLOAT NUMBER INDIDE A QUOTE IS A STRING FLOAT NUMBER

//* 9.18. 3.569, 45.478, ...

let num11 = "3.458";
console.log(parseFloat(num11));

//? 3.458

//*-----------------  FLOAT  TO INTEGER   ---------------*/

//* WE CAN CONVERT FLOAT NUMBERS TO INTEGERS

let kis = 15.24;
console.log(parseInt(kis));

//? 15
