function $(id) {
    return document.getElementById(id);
}
function readLS(key) {
    var loc = localStorage.getItem(key);
    if (loc != null) {
        loc = JSON.parse(loc);
    }
    return loc;
}
