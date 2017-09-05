/**Write a JavaScript program to determine
 *  whether a given year is a leap year in the Gregorian calendar */
// thuhang
var year = window.prompt("Enter a year: ");
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);