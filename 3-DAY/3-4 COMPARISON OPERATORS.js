//*  ------   COMPARISION OPERATORS  ------  */

//* - ==   ASSIGNMENT OPERATOR
//* - ===  CHECKING WITH VALUE AND TYPE
//* - !=   NOT EQUAL
//* - >    GREATER THAN
//* - <    LESS THAN
//* - >=   GREATER THAND ANA EQUAL TO
//* - <=   LESS THAN AND EQUAL TO

console.log(3 > 2); //? true
console.log(3 >= 2); //? true
console.log(3 < 2); //? false
console.log(3 == 3); //? true
console.log(3 !== "3"); //? true
console.log(0 == ""); //? true
console.log(1 == true); //? true
console.log(undefined == null); //? true
console.log(0 == false); //? true

console.log("mango".length == "avacado".length);
//? false
console.log("milk".length == "meat".length);
//? true

//! AS RULE OF THUMB, IF VALUE IS NOT TRUE WITH THIS
//! "==" IT WILL NOT BE EQUAL WITH THIS TOO "==="
