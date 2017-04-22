window.onload = function(){
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }

    //SELECT ONE
    //1
    //var miArray = ["enero", "febrero"];
    //2
    var miArray = new Array("enero", "febrero"); //tambien funciona.

    //SELECT ONE
    //1
    miArray.forEach(
        function(item, index){
            //SELECT ONE
            //1
            //document.write(item + "<br>");
            //2
            document.getElementsByTagName("p")[0].innerHTML += item + " index: " + index +"<br>";
        }
    );

    //2
    // for (var i = 0; i < miArray.length; i++) {
    //     //SELECT ONE
    //     //1
    //     //document.write(miArray[i] + "<br>");
    //     //2
    //     //document.getElementsByTagName("p")[0].innerHTML += miArray[i]  +"<br>";
    // }


}
