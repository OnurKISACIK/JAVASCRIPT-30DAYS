//!  ---------  Exercises: Level 1  ------------*/

//* 1- Declare firstName, lastName, country, city, age, isMarried, year variable
//* and assign value to it and use the typeof operator to check different data types.

let firstName = "James";
let lastName = "vook";
let country = "Nederlands";
let city = "Amsterdam";
let age = 25;
let isMarried = true;
let year = 2017;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

//* 2- Check if type of '10' is equal to 10

console.log(10 == `10`);

//* 3- Check if parseInt('9.8') is equal to 10

console.log(parseInt(9.8) == 10);

//* 4- Boolean value is either true or false.
//*  Write three JavaScript statement which provide truthy value.
//*  Write three JavaScript statement which provide falsy value.

console.log(5 == "5");
console.log(1 == "1");
console.log(0 == "");

console.log(0 == undefined);
console.log(0 == null);
console.log(0 == NaN);

//* 5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
//? true
console.log(4 >= 3);
//? true
console.log(4 < 3);
//? false
console.log(4 <= 3);
//? false
console.log(4 == 4);
//? true
console.log(4 === 4);
//? true
console.log(4 != 4);
//? false
console.log(4 !== 4);
//? false
console.log(4 != "4");
//? false
console.log(4 == "4");
//? true
console.log(4 === "4");
//? false

//* 6- Find the length of python and jargon and make a falsy comparison statement.

console.log("python".length == "jargon".length);

//?true

//* 7- Figure out the result of the following expressions first
//* without using console.log(). After you decide the result confirm
//* it by using console.log()

//* 4 > 3 && 10 < 12
//? true
console.log(4 > 3 && 10 < 12);

//* 4 > 3 && 10 > 12
//? false
console.log(4 > 3 && 10 > 12);

//* 4 > 3 || 10 < 12

//?  true

console.log(4 > 3 || 10 < 12);

//* 4 > 3 || 10 > 12

//? true

console.log(4 > 3 || 10 > 12);

//* !(4 > 3)

//? false

console.log(!(4 > 3));

//* !(4 < 3)

//? true

console.log(!(4 < 3));

//* !(false)

//? true

console.log(!false);

//* !(4 > 3 && 10 < 12)

//? false

console.log(!(4 > 3 && 10 < 12));

//* !(4 > 3 && 10 > 12)

//? true

console.log(!(4 > 3 && 10 > 12));

//* !(4 === '4')

//? true

console.log(!(4 === "4"));

//* There is no 'on' in both dragon and python

//? true

let string1 = "dragon";
let string2 = "python";
let on1 = string1.substring(4, 6);
let on2 = string2.substring(4, 6);
console.log(on1 === on2);

//* 8- Use the Date object to do the following activities

//* What is the year today?
//* What is the month today as a number?
//* What is the date today?
//* What is the day today as a number?
//* What is the hours now?
//* What is the minutes now?
//* Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
console.log(now.getFullYear());

const now1 = new Date();
console.log(now.getMonth());

const now2 = new Date();
console.log(now.getDate());

const now3 = new Date();
console.log(now.getDay());

const now4 = new Date();
console.log(now4.getHours());

const now5 = new Date();
console.log(now5.getMinutes());

const now6 = new Date();
console.log(now6.getTime());

//! ---------  Exercises: Level 2  -----------*/

//* 1- Write a script that prompt the user to enter base and height
//* of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//* Enter base: 20
//* Enter height: 10
//* The area of the triangle is 100
/*
let a = 0.5;
let b = prompt("Please insert the base");
let c = prompt("Please insert the height");
let total = a * b * c;
console.log(total);
*/
//* 2- Write a script that prompt the user to enter side a, side b, and
//* side c of the triangle and and calculate the perimeter of triangle
//* (perimeter = a + b + c)

//* Enter side a: 5
//* Enter side b: 4
//* Enter side c: 3
// *The perimeter of the triangle is 12

/*
let aa = prompt("Please insert the a dimention");
let bb = Number(aa);
let cc = prompt("Please insert the c dimention");
let dd = Number(cc);
let ee = prompt("Please insert the e dimention");
let ff = Number(ee);
console.log(bd + dd + ff);
*/

//* 3- Get length and width using prompt and calculate an area of rectangle
//* (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/*
let rectangleA = prompt("Please insert the long side dim");
let rectangleB = prompt("Please insert the short side dim");
let m = Number(rectangleA);
let n = Number(rectangleB);
console.log((m + n) * 2);
*/
//* 4- Get radius using prompt and calculate the area of a circle
//* (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/*
function circle(r) {
  let PI = 3.14;
  let c = 2;
  let area = c * PI * r;
  console.log(area);
}
circle(2);
*/
//* 5- Calculate the slope, x-intercept and y-intercept of y = 2x -2
/*
let slope = 2; // m
let x_intercept = 1; // c / m
let y_intercept = -2; // c
console.log(
  `Eğim: ${slope}, x-kesim noktası: ${x_intercept}, y-kesim noktası: ${y_intercept}`
);
*/
//? Eğim: 2, x-kesim noktası: 1, y-kesim noktası: -2

//* 6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
/*
let x1 = 2,
  x2 = 6;
let y1 = 2,
  y2 = 10;
let slope1 = (y2 - y1) / (x2 - x1);
console.log(`Slope is ${slope1}`);
*/
//? 2

//* 7- Compare the slope of above two questions.

//? both is equal to 2 so both are EQUAL

//* 8- Calculate the value of y (y = x2 + 6x + 9).
//* Try to use different x values and figure out at what x value y is 0.

/*let x3 = -1;
let yvalue = x3 * x3 + 6 * x3 + 9;
console.log(yvalue);
*/
/*
let x_values = [-3, 0, 1, 2, 3];
for(let x of x_values) {
    let y = x*x + 6*x + 9;
    console.log(`x=${x}, y=${y}`);
}
    */
//! FOR DONGUSUNU GECTIGIMIZDE LUTFEN BUNU KONTROL ET!!!!

//* 9- Writ a script that prompt a user to enter hours and rate per hour.
//* Calculate pay of the person?
//* Enter hours: 40
//* Enter rate per hour: 28
//* Your weekly earning is 1120
/*
let hours = prompt("Please enter hours");
let ratePerHour = prompt("Please insert the rate");
let calc = hours * ratePerHour;
console.log(`Your weekly earning is ${calc}`);
*/
//* 10- If the length of your name is greater than 7 say,
//* your name is long else say your name is short.
/*
let comparing =
  "onur".length > 7
    ? console.log("Your name is Long")
    : console.log("Your name is short!");
*/
//* 11- Compare your first name length and your family name
//* length and you should get this output.

//* let firstName = 'David'
//* let lastName = 'Beliom'
//* Your first name, Asabeneh is longer than your family name, Yetayeh
/*
let name2 = "David";
let lastName2 = "Beliom";
let comparison =
  lastName2.length > name2.length
    ? console.log(
        `Your first name ${name2}, is longer than your family name,${lastName2} `
      )
    : console.log(
        `Your last name ${lastName2},  is longer than your first name,${name2}`
      );
*/
//* 12- Declare two variables myAge and yourAge and assign
//* them initial values and myAge and yourAge.
//* let myAge = 250
//* let yourAge = 25
//* I am 225 years older than you.
/*
let myAge = 250;
let yourAge = 25;
let difference = myAge - yourAge;
console.log(`I am ${difference} years older than you.`);
*/
//* 13- Using prompt get the year the user was born and if the user
//* is 18 or above allow the user to drive if not tell the user to
//* wait a certain amount of years.
//* Enter birth year: 1995
//* You are 25. You are old enough to drive
/*
let userAge = prompt("Please insert your Age");
userAge > 18
  ? console.log("You are 25. You are old enough to drive")
  : console.log(`You need ${userAge} years left to drive`);
*/
//* Enter birth year: 2005
//* You are 15. You will be allowed to drive after 3 years.
/*
let userAge2 = prompt("Please insert your age");
let today = 2020;
let ageDiff = today - userAge2;
ageDiff > 18
  ? console.log(`You are ${ageDiff}. You can drive the car.`)
  : console.log(
      `You are ${ageDiff}. You will be allowed to drive after 3 years.`
    );
*/
//* Write a script that prompt the user to enter number of years.
//* Calculate the number of seconds a person can live.
//* Assume some one lives just hundred years
/*
let numYears = prompt("Please insert the needed years");
let perYear = 60 * 60 * 60 * 24 * 365;
let totalCalc = numYears * perYear;
console.log(totalCalc);
*/
//* Enter number of years you live: 100
//* You lived 3153600000 seconds.
/*
let enterYear = prompt("Enter lived years");
let calculation = 3600 * 24 * 365 * enterYear;
console.log(`You lived ${calculation} seconds.`);
*/
//* Create a human readable time format using the Date time object

//* YYYY-MM-DD HH:mm
const noow = new Date();
const yearnow = noow.getFullYear();
const monthnow = noow.getMonth();
const daynow = noow.getDay();
const hournow = noow.getHours();
const secondsnow = noow.getSeconds();
console.log(
  `YYYY-MM-DD HH:mm  ${yearnow}-${monthnow}-0${daynow}  ${hournow}:${secondsnow}`
);
//* DD-MM-YYYY HH:mm
//* DD/MM/YYYY HH:mm
