/*
Write a JavaScript program to display the current day and time in the following format 
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

var date = new Date();
var dayInWeek = ["Monday", "Tuesday", "Threeday", "Wednesday", "Thusday", "Friday", "Startday", "Sunday"];
console.log("To day is: " + dayInWeek[date.getDay()]);
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var p = "AM";
if(h>12){
    h = h - 12;
    p = "PM";
}
if(m===0 && s ===0){
    if(h===0)
        p = "Midnight";
    else if(h===12)
        p = "Noon";
}
console.log("Current time: "+h+" "+p+" : "+m+" : "+s);
