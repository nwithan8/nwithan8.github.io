var id;
var timer;

function barssmooth(numberbars, whichbars, userheight, userspeed) {
    if (userspeed == "") {
        userspeed = 70;
    }
    for(var i = 1; i <= numberbars; i++) {
        var tempstring = "" + whichbars + i;
        var tempbar = document.getElementById(tempstring);
        tempbar.style.display = "block";
        setTimeout(movebarssmooth(tempstring, userheight, userspeed), 2);
    }
}

function movebarssmooth(element, userheight, userspeed) {
    
    var elem = document.getElementById(element); 
    var heightlimit = userheight;
    
    
    
    var height = 1*Math.floor(Math.random() * userheight);
    id = setInterval(frame, userspeed);
    var up = false;
    function frame() {
        if  (height <= 0) {
            up = true;
        }
        if (height >= heightlimit) {
            up = false;
        }
        if (up == true) {
            height = height + 5;
            elem.style.height = height + 'px';
        }
        if (up == false) {
            height = height - 5;
            elem.style.height = height + 'px';
        }
    }
}