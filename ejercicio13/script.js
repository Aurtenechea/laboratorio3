window.onload = function(){
    function $(text){
        return document.getElementById(text);
    }
    function $$(text){
        return $(text).value;
    }

    function isClass(e, oneClassName){
        var classes = e.className.split(" ");
        var r = false;
        for (var i = 0; i < classes.length; i++) {
            if(classes[i] == oneClassName)
                r = true;
        }
        return r
    }
    function replaceClass(e, classContain, classReplace){
        var classes = e.className.split(" ");
        var r = false;
        for (var i = 0; i < classes.length; i++) {
            if(classes[i] == classContain)
                classes[i] = classReplace;
        }
        e.className = classes.join(" ");
    }

    //SCRIPT
    function More(){
        //console.log(classes);
        if( isClass(this, "long") )
            replaceClass(this, "long", "short");
        else{
            replaceClass(this, "short", "long");
        }
    };

    var paragraphs = document.getElementsByTagName("P");
    //console.log(paragraphs.length);
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].id = "paragraph_" + i;
        paragraphs[i].onclick = More;
    }
}
// if( paragraphs[i].innerHTML.length > 400 ) {
//     paragraphs[i].innerHTML = paragraphs[i].innerHTML.slice(0, 400);
//     paragraphs[i].innerHTML += " <a href='asfd'>More...</a>";
// }
