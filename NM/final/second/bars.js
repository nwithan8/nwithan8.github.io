var numDemoBars = 10;

function demobars() {
    var elem = document.getElementById("demobars");
    elem.style.display = "block";

}

function mainpagebars() {
    for (var i = 1; i <= 5; i++) {
        var tempstring = "db" + i;
        setTimeout(movebarssmooth(tempstring, 80, 70), 2);
    }
}

function demobarssmooth() {
    for (var i = 1; i <= 5; i++) {
        var tempstring = "db" + i;
        setTimeout(movebarssmooth(tempstring, 100, 50), 2);
    }
    for (var i = 6; i <= 10; i++) {
        var tempstring = "db" + i;
        setTimeout(movebarssmooth(tempstring, 100, 300), 2);
    }
}

function demobarsrandom() {
    for (var i = 11; i <= 15; i++) {
        var tempstring = "db" + i;
        setTimeout(movebarsrandom(tempstring, 100, 50), 2);
    }
    for (var i = 16; i <= 20; i++) {
        var tempstring = "db" + i;
        setTimeout(movebarsrandom(tempstring, 100, 300), 2);
    }
}

var type = "smooth";
var numBars = 0;
var width = 0;
var height = 0;
var speed = 0;
var color1 = "";
var color2 = "";
var color3 = "";
var color4 = "";
var color5 = "";
var color6 = "";
var opacity1 = "";
var opacity2 = "";
var opacity3 = "";
var opacity4 = "";
var opacity5 = "";
var opacity6 = "";


function getbarvalues() {
    var x = document.getElementById("values");
    numBars = x.elements[0].value;
    height = x.elements[1].value;
    speed = x.elements[2].value;
    throwaway1 = x.elements[3].value;
    type = x.elements[4].value;
    throwaway2 = x.elements[5].value;
    color1 = x.elements[6].value;
    opacity1 = x.elements[7].value;
    color2 = x.elements[8].value;
    opacity2 = x.elements[9].value;
    color3 = x.elements[10].value;
    opacity3 = x.elements[11].value;
    color4 = x.elements[12].value;
    opacity4 = x.elements[13].value;
    color5 = x.elements[14].value;
    opacity5 = x.elements[15].value;
    color6 = x.elements[16].value;
    opacity6 = x.elements[17].value;
    resultbars(numBars, height, speed, type);
}

function getbarcolors() {
    var x = document.getElementById("values");
    numBars = x.elements[0].value;
    height = x.elements[1].value;
    speed = x.elements[2].value;
    throwaway1 = x.elements[3].value;
    type = x.elements[4].value;
    throwaway2 = x.elements[5].value;
    color1 = x.elements[6].value;
    opacity1 = x.elements[7].value;
    color2 = x.elements[8].value;
    opacity2 = x.elements[9].value;
    color3 = x.elements[10].value;
    opacity3 = x.elements[11].value;
    color4 = x.elements[12].value;
    opacity4 = x.elements[13].value;
    color5 = x.elements[14].value;
    opacity5 = x.elements[15].value;
    color6 = x.elements[16].value;
    opacity6 = x.elements[17].value;
    changecolors(color1, color2, color3, color4, color5, color6, opacity1, opacity2, opacity3, opacity4, opacity5, opacity6);
}


function changecolors(c1, c2, c3, c4, c5, c6, o1, o2, o3, o4, o5, o6) {
    var cols = document.getElementsByClassName('color1');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c1;
        cols[i].style.opacity = o1;
    }
    cols = document.getElementsByClassName('color2');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c2;
        cols[i].style.opacity = o2;
    }
    cols = document.getElementsByClassName('color3');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c3;
        cols[i].style.opacity = o3;
    }
    cols = document.getElementsByClassName('color4');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c4;
        cols[i].style.opacity = o4;
    }
    cols = document.getElementsByClassName('color5');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c5;
        cols[i].style.opacity = o5;
    }
    cols = document.getElementsByClassName('color6');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = "#" + c6;
        cols[i].style.opacity = o6;
    }
}






function resultbars(b, h, s, t) {
    var elem = document.getElementById("resultbars");
    elem.style.display = "block";
    var table = document.getElementById("resultbarstable");
    elem.style.height = (h + 10) + "px;";

    if (t == "smooth") {
        barssmooth(numBars, 'rb', h, s)
    }
    if (t == "random") {
        barsrandom(numBars, 'rb', h, s)
    }
}

function printhtml(numBars) {
    var tempstring = "";
    for (var i = 1, j = 1; i <= numBars; i++, j++) {
        if (j > 6) {
            j = 1;
        }
        tempstring = tempstring + "<xmp><td> <div id =\"b" + i + "\" class=\"color" + j + "\"><div> </td></xmp>";
    }
    var htmlcode = document.getElementById("htmlcode");
    htmlcode.innerHTML = "<pre><xmp><body onload=\"movebars()\"></xmp>" +
        "<xmp><div id=\"bars\"></xmp>" +
        "<xmp><table id=\"barstable\"></xmp>" +
        "<xmp><tr></xmp>" +
        tempstring +
        "<xmp></tr></xmp>" +
        "<xmp></table></xmp>" +
        "<xmp></div></xmp>" +
        "</pre>";
}

function printcss(color1, opacity1, color2, opacity2, color3, opacity3, color4, opacity4, color5, opacity5, color6, opacity6, height) {
    if (color1 == "") {
        color1 = "000000";
    }
    if (color2 == "") {
        color2 = "000000";
    }
    if (color3 == "") {
        color3 = "000000";
    }
    if (color4 == "") {
        color4 = "000000";
    }
    if (color5 == "") {
        color5 = "000000";
    }
    if (color6 == "") {
        color6 = "000000";
    }
    if (opacity1 == "") {
        opacity1 = 1;
    }
    if (opacity2 == "") {
        opacity2 = 1;
    }
    if (opacity3 == "") {
        opacity3 = 1;
    }
    if (opacity4 == "") {
        opacity4 = 1;
    }
    if (opacity5 == "") {
        opacity5 = 1;
    }
    if (opacity6 == "") {
        opacity6 = 1;
    }
    if (height == "") {
        height = 0;
    }
    var csscode = document.getElementById("csscode");
    csscode.innerHTML = "<pre><xmp>.color1 {</xmp>" +
        "<xmp>background-color: #" + color1 + ";</xmp>" +
        "<xmp>opacity: " + opacity1 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>.color2 {</xmp>" +
        "<xmp>background-color: #" + color2 + ";</xmp>" +
        "<xmp>opacity: " + opacity2 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>.color3 {</xmp>" +
        "<xmp>background-color: #" + color3 + ";</xmp>" +
        "<xmp>opacity: " + opacity3 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>.color4 {</xmp>" +
        "<xmp>background-color: #" + color4 + ";</xmp>" +
        "<xmp>opacity: " + opacity4 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>.color5 {</xmp>" +
        "<xmp>background-color: #" + color5 + ";</xmp>" +
        "<xmp>opacity: " + opacity5 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>.color6 {</xmp>" +
        "<xmp>background-color: #" + color6 + ";</xmp>" +
        "<xmp>opacity: " + opacity6 + ";</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>#bars {</xmp>" +
        "<xmp>width: 100%;</xmp>" +
        "<xmp>height: " + height + "px;</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>#barstable {</xmp>" +
        "<xmp>width: 100%;</xmp>" +
        "<xmp>height: " + (height*1 + 10) + "px;</xmp>" +
        "<xmp>}</xmp>" +
        "<xmp>#barstable td {</xmp>" +
        "<xmp>width: 80px;</xmp>" +
        "<xmp>padding: 1px;</xmp>" +
        "<xmp>vertical-align: bottom;</xmp>" +
        "<xmp>}</xmp>" +
        "</pre>";
}

function printjs(numBars, userheight, userspeed) {
    if(userspeed == "") {
        userspeed = 70;
    }
    if(numBars == "") {
        numBars = 0;
    }
    if(userheight == "") {
        userheight = 0;
    }
    var jscode = document.getElementById("jscode");
    if (type == "random") {
        jscode.innerHTML = "<pre><xmp>function movebars() {</xmp>" +
            "<xmp>for(var i = 1; i <= " + numBars + "; i++) {</xmp>" +
            "<xmp>var tempstring = \"b\" + i;</xmp>" +
            "<xmp>setTimeout(random(tempstring), 2);</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>}</xmp>" +
            "<br>" +
            "<xmp>function random(element) {</xmp>" +
            "<xmp>var elem = document.getElementById(element);</xmp>" +
            "<xmp>var heightlimit = " + userheight + ";</xmp>" +
            "<xmp>id = setInterval(frame, " + userspeed + ");</xmp>" +
            "<xmp>function frame() {</xmp>" +
            "<xmp>var height = 1*Math.floor(Math.random() * " + userheight + ") + 1;</xmp>" +
            "<xmp>elem.style.height = height + 'px';</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>}</xmp>" +
            "</pre>";
    } else {
        jscode.innerHTML = "<pre><xmp>function movebars() {</xmp>" +
            "<xmp>for(var i = 1; i <= " + numBars + "; i++) {</xmp>" +
            "<xmp>var tempstring = \"b\" + i;</xmp>" +
            "<xmp>setTimeout(smooth(tempstring), 2);</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>}</xmp>" +
            "<br>" +
            "<xmp>function smooth(element) {</xmp>" +
            "<xmp>var elem = document.getElementById(element);</xmp>" +
            "<xmp>var heightlimit = " + userheight + ";</xmp>" +
            "<xmp>var height = 1*Math.floor(Math.random() * " + userheight + ");</xmp>" +
            "<xmp>id = setInterval(frame, " + userspeed + ");</xmp>" +
            "<xmp>var up = false;</xmp>" +
            "<xmp>function frame() {</xmp>" +
            "<xmp>if  (height <= 0) {</xmp>" +
            "<xmp>up = true;</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>if (height >= heightlimit) {</xmp>" +
            "<xmp>up = false;</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>if (up == true) {</xmp>" +
            "<xmp>height = height + 5;</xmp>" +
            "<xmp>elem.style.height = height + 'px';</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>if (up == false) {</xmp>" +
            "<xmp>height = height - 5;</xmp>" +
            "<xmp>elem.style.height = height + 'px';</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>}</xmp>" +
            "</pre>";
    }
}