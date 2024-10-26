//* ------------------------  MATH OBJECTS  --------------------------- */

const PI = Math.PI;
console.log(PI);

//* - (.MATH.ROUND)

//* ROUNDING THE CLOSEST NUMBER IF IT IS
//* LESS THAN .5 THAN CHANGE FLOOR  IF MORE THAN .5 THAN CHANGE TO CEIL

console.log(Math.round(PI));

//? 3

console.log(Math.round(3.689));

//? 4

console.log(Math.round(3.4999));

//? 3

//* -------------------------------------------------------------------*/

//* - (.MATHFLOOR)

//* ROUNDING DOWN NO MATTER IF IT IS LESS THAN OR HIGHER THAN THE .5

console.log(Math.floor(3.99999));

//? 3
//* -------------------------------------------------------------------*/

//* - (.MATH.CEIL)

//* ROUNDING UP NO MATTER IF IT IS LESS OR MORE THEN .5

console.log(Math.ceil(3.0001));

//? 4

console.log(Math.ceil(6.888));

//? 7
//* -------------------------------------------------------------------*/

//* - (.MATH.MIN)

//* IT RETURNS THE MINIMUM VALUE

console.log(Math.min(-100, 49, 20, 5, 0, 1, 40, 50, 100));

//? -100

console.log(Math.min(0, 1, 2, 5, 10));

//? 0

//* -------------------------------------------------------------------*/

//* - (.MATH.RANDOM)

//* CREATES RANDOM NUMBERS BETWEEN 0 AND 0.9999999

const nums6 = Math.random();
console.log(nums6);

//? 0.8755733539528665

const nums7 = Math.floor(Math.random() * 11);
console.log(nums7);
//! CREATE A NUMBER TILL 10.999999 BUT NOT 11 AND IT TAKES THE FLOOR

//? 8

const nums8 = Math.floor(Math.random() * 5);
console.log(nums8);

//? 1

//* *5 WE CAN CREATE NUMBERS FROM 0 TO 4
//* *11 WE CAN CREATE NUMBERS FROM 0 TO 10

//* -------------------------------------------------------------------*/

//* - (.MATH.ABS)

//* ABSOLUTE VALUE MEANS IF TEH NUMBER IS "-100" IT CONVERTS TO "100"

console.log(Math.abs(-100));

//? 100

console.log(Math.abs(-5));

//? 5

//* -------------------------------------------------------------------*/

//* - (.MATH.SQRT)

//* SQUARE ROOT MEANS IF THE NUMBER IS 4 THIS IS SQUARE 2 MEANS 2*2=4

console.log(Math.sqrt(100));

//? 10

//* -------------------------------------------------------------------*/

//* - (.MATH.POW(#,#)) = ** (KOKUNU BULMAYA YARIYOR)

//* IT GIVES THE POWER. AS AN EXAMPLE (2,3)=2*2*2=8

console.log(Math.pow(2, 2));

//? 4

console.log(Math.pow(3, 2));

//? 9

//* -------------------------------------------------------------------*/

//* ------------------------  RONDOM NUMBER GENERATOR  --------------------------- */

//* THE JAVASCRIPT MATH OBJECT HAS A RANDOM() NUMBER GENERATES NUMBER FROM 0 TO 0.99999

let randomNumber = Math.random();
console.log(randomNumber);

//? 0.3155249630504928

//* LET SEE HOW WE CAN GENERATE RANDOM NUMBERS FROM 0 TO 10

let randomNumber1 = Math.floor(Math.random() * 11);
let randomNumber2 = Math.floor(Math.random() * 11);

console.log(randomNumber1);
console.log(randomNumber2);

//? 7
//? 6
