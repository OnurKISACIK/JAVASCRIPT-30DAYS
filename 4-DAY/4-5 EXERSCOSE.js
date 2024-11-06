//!  -----  Exercises: Level 1  ------

//* 1- Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//* give feedback:'You are old enough to drive' but if not 18 give another
//* feedback stating to wait for the number of years he needs to turn 18.
//* Enter your age: 30
//* You are old enough to drive.
//* Enter your age:15
//* You are left with 3 years to drive.
/*

let age = prompt(`Enter your Age:`);
let diff = 18 - age;
if (age > 18) {
  console.log(`You are old enough to drive`);
} else {
  console.log(`${diff} years after when he needs to turn 18.!!!`);
}

*/

//* 2- Compare the values of myAge and yourAge using if … else.
//* Based on the comparison and log the result to console stating who is older
//* (me or you). Use prompt(“Enter your age:”) to get the age as input.
//* Enter your age: 30
//* You are 5 years older than me.
/*

let myAge = prompt(`Enter my age`);
let yourAge = prompt(`Enter your age`);
let comparing = Math.abs(myAge - yourAge);

if (myAge > comparing) {
  console.log(`I am ${comparing} years older than you`);
} else {
  console.log(`You are ${comparing} year yonger than me `);
}

*/

//* 3- If a is greater than b return 'a is greater than b' else 'a is less than b'.
//* Try to implement it in to ways
//* - using if else
//* - ternary operator.
//*  let a = 4
//*  let b = 3
//*  4 is greater than 3
/*

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

*/

//* 4- Even numbers are divisible by 2 and the remainder is zero.
//* How do you check, if a number is even or not using JavaScript?
//* Enter a number: 2
//* 2 is an even number
//* Enter a number: 9
//* 9 is is an odd number.
/*
let oddAndEven = prompt(`Please insert a number`);
let check = oddAndEven % 2;
if (check == 0) {
  console.log(`${oddAndEven} a even number`);
} else {
  console.log(`${oddAndEven} a odd number`);
}

*/

//!  -----  Exercises: Level 2  ------

//* 1- Write a code which can give grades to students according to theirs scores:
//* 90-100, A
//* 70-89, B
//* 60-69, C
//* 50-59, D
//* 0-49, F
/*

let notes = prompt("Deger gir");
if (notes > 90) {
  console.log("A");
} else if (notes > 70) {
  console.log("B");
} else if (notes > 60) {
  console.log("C");
} else if (notes > 59) {
  console.log("D");
} else if (notes > 49) {
  console.log("F");
} else {
  console.log("Kaldiniz");
}

*/
//* 2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//*September, october or November, the season is Autumn.
//*December, January or February, the season is Winter.
//*March, April or May, the season is Spring
//*June, July or August, the season is Summer
/*
let userImput = prompt("Please inser the Month");
let seasons = userImput.toLowerCase();

switch (seasons) {
  case "october":
    console.log("Autumn");
    break;
  case "september":
    console.log("Autumn");
    break;
  case "november":
    console.log("Autumn");
    break;
  case "december":
    console.log("Winter");
    break;
  case "january":
    console.log("Winter");
    break;
  case "february":
    console.log("Winter");
    break;
  case "march":
    console.log("Spring");
    break;
  case "april":
    console.log("Spring");
    break;
  case "may":
    console.log("Spring");
    break;
  case "june":
    console.log("Summer");
    break;
  case "july":
    console.log("Summer");
    break;
  case "August":
    console.log("Summer");
    break;
  default:
    "Please insert needed month";
}
*/

/*

let dataInput = prompt("Insert Month");
let months = dataInput.toLowerCase();
switch (months) {
  case "october":
  case "september":
  case "november":
    console.log("Autumn");
    break;
  case "december":
  case "January":
  case "february":
    console.log("Winter");
    break;
}

*/
//* 3- Check if a day is weekend day or a working day. Your script will take day as an input.
//*    What is the day  today? Saturday
//*    Saturday is a weekend.

//*    What is the day today? saturDaY
//*    Saturday is a weekend.

//*    What is the day today? Friday
//*    Friday is a working day.

//*    What is the day today? FrIDAy
//*    Friday is a working day.

/*
let days = prompt("Days");
let days1 = days.toLowerCase();

switch (days1) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thurdays":
  case "friday":
    console.log("WORKING DAYS");
    break;
  case "saturday":
  case "sunday":
    console.log("WEEKENDS");
    break;
  default:
    console.log("Please insert the day of the week");
}

*/

//!  -----  Exercises: Level 3  ------
//* 1- Write a program which tells the number of days in a month.
//* Enter a month: January
//* January has 31 days.

//* Enter a month: JANUARY
//* January has 31 day

//* Enter a month: February
//*  February has 28 days.

//* Enter a month: FEbruary
//* February has 28 days.
/*

let months = prompt("Please enter the month");
let inputMonth = months.toLowerCase();
switch (inputMonth) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${inputMonth} has 31 day`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${inputMonth} has 30 day`);
    break;
  case "february":
    console.log(`${inputMonth} has 29 day`);
    break;
  default:
    console.log("Please enter valid Month information");
}
*/
//* 2- Write a program which tells the number of days in a month, now consider leap year.

//* SAFAK SORU:
let trafficLight = prompt("Which Trafic light you see");
let lightIs = trafficLight.toLowerCase();

switch (lightIs) {
  case "green":
    console.log("Devam Et :D");
    break;
  case "yellow":
    console.log("Dikkat et");
    break;
  case "red":
    console.log("DURRRR!!! :D");
    break;
  default:
    console.log("Insert one of the trafic light which you see in the sign");
}
