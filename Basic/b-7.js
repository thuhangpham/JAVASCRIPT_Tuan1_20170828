/*Write a JavaScript program to find 
1st January is being a Sunday between 2014 and 2050.   */

for(let i=2014; i<2050; i++){
    let date = new Date(i, 0, 1);
    if(date.getDay() === 0)  // 0 la ngay chu nhat
        console.log("01/01 Year: ", i);
} // thuhang