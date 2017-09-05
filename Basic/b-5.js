function animation(e){
    var demo = document.getElementById(e);
    var str = "";
    str = demo.innerText;
    console.log("d"+str);
    setInterval(()=>{
        str = str[str.length-1]+str.substring(0, str.length-1);
        demo.innerText = str;
    }, 100);    
}
// thuhang