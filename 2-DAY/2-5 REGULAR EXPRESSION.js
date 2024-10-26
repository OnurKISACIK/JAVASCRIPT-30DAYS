//* ------------------------  MATCH SYNTAX ----------------------------*/

let syntax =
  "I love JavaScript. If you do not Love JavaScript what else can you love.";

console.log(syntax.match());

console.log(syntax.match(/love/gi));

//?

//? love, love

//*-------------------------------------------------------------------*/

//* ------------  LETS EXTRACT NUMBERS FROM TEXT USING REGULAR EXPRESSION  ------------------*/

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
console.log(txt.match(/\d+/g));

//* d - IT MEANS DIGITS
//* i - CASE INSENSITIVE
//* g - GLOBAL, MEANS CHECK WHOLE STRING
//* + - ONE ORE MORE DIGIT NUMBERS
