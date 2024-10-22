//*---------- ADDING JAVASCRIPT TO WEBPAGE ----------*/

//* JAVA SCRIPT CAN BE ADDED TO A WEBPAGE WITH TREE DIFFERENT WAY

//* - INLINE SCRIPT
//* - INTERLINE SCRIPT
//* - EXTERNAL SCRIPT
//*   -MULTIPLE EXTERNAL SCRIPT

//*----------  INLINE SCRIPT  ----------*/

//* WE CREATE A HTML FILE THAN WE CAN ISNERT HE BASIC CONTENTS WITH "SHIFT+!"
//* AND INSERT THE BODY TAGS

//*  <!DOCTYPE html>
//*  <html lang="en">
//*  <head>
//?    <title>30DaysOfScript: Satır İçi script</title>
//*  </head>
//*  <body>
//?    <button onclick="alert('30GündeJavaScripte hoş geldiniz')">Bana Tıkla</button>
//*  </body>
//*  </html>

//*---------- INTERLINE SCRIPT  ----------*/

//* THE INTERLINE SCRIPT CAN BE WRITTEN
//* IN THE HEAD OR BODY TAGS BUT IT IS PREFERED TO PUT ON THE BODY OF THE HTML

//* ************   FIRST WAY INSIDE THE HEAD TAGS   ************

//*  <!DOCTYPE html>
//*  <html lang="en">
//*   <head>
//?    <title>30GündeScript:Dahili Script</title>
//*    <script>
//?      console.log("30GündeJavaScript'e hoş geldiniz");
//*    </script>
//*  </head>
//*  <body></body>
//*  </html>

//* ************   SECOND WAY INSIDE THE BODY TAGS   ************

//*  <!DOCTYPE html>
//*  <html lang="en">
//*  <head>
//?    <title>30GündeScript:Dahili Script</title>
//*  </head>
//*  <body>
//?    <button onclick="alert('30GündeJavaScripte hoş geldiniz!');">
//*      Bana Tıkla
//*    </button>
//*    <script>
//?      console.log("30GündeJavaScript'e hoş geldiniz!");
//*    </script>
//*  </body>
//*  </html>

//*----------  EXTERNAL SCRIPT  ----------*/

//* SIMILAR TO THE INTERNAL SCRIPT  LINK CAN BE ON THE HEAD OR BODY TAGS
//* BUT BODY IS THE BEST PLACE, FIRST WE CREATE EXTERNAL JAVASCRIPT FILE "FILENAME.js"
//* THAN TO ADD THIS FILE INSIDE THE HTML FILE AS BELOW

//*  <!DOCTYPE html>
//*  <html lang="en">
//*  <head>
//*    <title>30GündeJavaScript:Harici script</title>
//?    <script src="introdiction.js"></script>
//*  </head>
//*  <body></body>
//*  </html>

//*----------  MULTIPLE EXTERLINE SCRIPT  ----------*/

//* THE SAME LIKE EXTERNAL SCRIPT WE JUST INSERT OTHER FILES AS WELL THE SAME PLACE

//*  <!DOCTYPE html>
//*  <html lang="en">
//*  <head>
//*    <meta charset="UTF-8">
//*    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//*    <title>Document</title>
//*  </head>
//*  <body>
//?    <Script src="1-1-CONSOLE.js"></Script>
//?    <Script src="1-2-CONSOLE.js"></Script>
//*  </body>
//*  </html>
