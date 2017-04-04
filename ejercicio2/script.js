window.onload = function(){
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }


    var noSirve = false;
    var myArray = new Array();
    for(var i=2;i<30;i++){
        //console.log("*********");
        //console.log("i="+i);
        for(var j=2; j<i;j++){
            //console.log("j="+j);
            if( (i % j == 0) )
                noSirve = true;

        }
        if(!noSirve){
            //console.log(i + ":  ****BINGO!!*****");
            myArray.push(i);
        }
        if(myArray.lenght == 20)
            break;
        noSirve = false;
    }

    myArray.forEach(function(item, index){
        console.log(item);
    });

}
