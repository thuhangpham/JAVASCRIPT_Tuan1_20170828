var d = new Date();
y = d.getFullYear();
if(d.getMonth===11 && d.getDay()>25)
    d++;
var giangSinh = new Date(y, 11, 25);// vi thang bat dau = 0
var days =  Math.floor((giangSinh.getTime()-d.getTime())/(1000*60*60*24));
console.log(days);