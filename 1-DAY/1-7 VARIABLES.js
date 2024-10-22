//* ----------  VARIABLES  -----------*/

//* WE CAN THINK THE VARIABLES AS CONTAINERS OF DATE.
//* WHEN A BARIABLE ASSIGNED TO A VALUE  THE MEMORY SPACE WILL BE FILL WITH THIS DATA

//*   ----- VAR  ----- LET ----- CONST -----

//! FOR A VARIABLE THAT CHANGES AT A DIFFERENT TIME WE USE "LET"

//! IF THE DATA DOES NOT CHANGE AT ALL THAN WE CAN USE "CONST"

//* VAR WE WILL CHECK IN SCOPE PART */

//* --------   A VALID JAVASCRIPT VARIABLE NAME RULES    ----*/

//* -- VARIABLE NAME SHOULD NOT BEGIN WITH NUMBER
//* -- VARIABLE NAME DOESNOT ALLOW SPECIAL CHARACTERS "EXPECT $ AND _ "
//* -- VARIABLE NAME FOLLOWS A camelCASE CONVENTION
//* -- VARIABLE NAME SHOULD NOT HAVE "SPACE" BETWEEN WORDS

//? -- firsName    -- capitalCity    -- num1
//? -- lastName    -- isMerried      -- _num1
//? -- contry      -- first_Name     -- $num1
//? -- city        -- last_name      -- year_2020

//! DONOT USE LIKE BELOW
//! -- first-name    -- 1_num    -- year-2020

//* -----------  DECLARING DIFRENT VARIABLES OF DIFFERENT TYPES  -------------*/

let youtubeChannel = "Astalavista";
let channelAge = 10;
let channelActivity = true;
let otherChannel = null;
let channelMoney = undefined;

console.log(
  youtubeChannel,
  channelAge,
  channelActivity,
  otherChannel,
  channelMoney
);

//?  STING - NUMBER - BOOLEAN - NULL - UNDEFINED

//* -----------  DECLARING VARIABLES WITH NUMBER VALUES  -------------*/

let age = 80;
const gravity = 9.81; //* EARTH GRAVITY
const boolingPoint = 100; //* WATER BOOING POINT
const PI = 3.14; //* GEOMETRICAL CONSTANT

//! VARIABLES ALSO CAN BE DECLARING IN ONE LINE SAPERETED BY COMA !!!
//! HOWEVER IT IS BETTER TO USE SEPERATE LINES!!!

let name = "Onur",
  job = "SP",
  live = "IST";

//? Onur SP IST
