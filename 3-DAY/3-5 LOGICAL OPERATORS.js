//*  ------  LOGICAL OPERATORS ------  */

//* THE FOLLOWING SYMBOL ARE THE COMMON LOGICAL OPERATORS

//* - && --> AMPERSAN
//* - || --> PIPE
//* - !  --> NEGATION

const check = 4 > 3 && 10 > 5;
console.log(check);
//? true

const check1 = 4 > 3 && 10 < 5;
console.log(check);
//? false

const check2 = 4 < 3 && 10 < 4;
console.log(check2);
//? true

const check3 = 4 > 3 || 10 > 3;
console.log(check3);
//? true

const check4 = 4 > 3 || 2 < 1;
console.log(check4);
//? true

const check5 = 4 > 3 || 2 < 1;
console.log(check5);
//? true

//! WITH PIPE "||" IF ONE CONDITION IS TRUE ANSWER IS TRUE

let check6 = !(4 > 3);
console.log(check6);
//? false

//! THIS SYMBOL IS CHANGING THE (!) RESULT FROM TRUE TO FALSE
//! GIVES ALWAYS OPPOSITE ANSWER!!
