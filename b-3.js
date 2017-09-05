var date = new Date();
var dd = date.getDate();
var mm = date.getMonth();
var yyyy = date.getFullYear();
if(dd<10) dd = '0'+dd;
if(mm<10) mm = '0'+mm;
console.log(dd+"-"+mm+"-"+yyyy);
console.log(dd+"/"+mm+"/"+yyyy);