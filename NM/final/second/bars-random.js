var id;

var id1;
var id2;

var timer;

function barsrandom(numberbars, whichbars, userheight, userspeed) {
    if (userspeed == "") {
        userspeed = 70;
    }
    for(var i = 1; i <= numberbars; i++) {
        var tempstring = "" + whichbars + i;
        var tempbar = document.getElementById(tempstring);
        tempbar.style.display = "block";
        setTimeout(movebarsrandom(tempstring, userheight, userspeed), 2);
    }
}

function movebarsrandom(element, userheight, userspeed) {
    var elem = document.getElementById(element); 
    var heightlimit = userheight;
    
    id = setInterval(frame, userspeed);
    function frame() {
            var height = 1*Math.floor(Math.random() * userheight) + 1;
            elem.style.height = height + 'px'; 
        }
    }