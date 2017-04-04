window.onload = function(){
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }

    var str = prompt("Ingrese un string que sera evaluado por upper and lower case.");
    var patt = new RegExp("[a-z]");
    var hasLower = patt.test(str);
    var hasUpper = /[A-Z]/.test(str);

    console.log(str);
    if (hasLower && hasUpper)
        console.log("Has Lower and Upper Case");
    else if(hasLower)
        console.log("Has Lower Case Only");
    else
        console.log("Has Upper Case Only");
}
