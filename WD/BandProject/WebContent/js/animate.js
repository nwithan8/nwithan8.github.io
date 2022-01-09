var numBars = 30;

function movethem() {
    for(var i = 1; i <= numBars; i++) {
        var tempstring = "b" + i;
        setTimeout(moveup(tempstring), 2);
    }
}

function moveup(element) {
    var elem = document.getElementById(element); 
    var id = setInterval(frame, 100);
    function frame() {
            var width = 1*Math.floor(Math.random() * 200) + 1;
            elem.style.height = width + 'px'; 
        }
    }

function movedown(element) {
    var elem = document.getElementById(element); 
    var width = 90;
    var id = setInterval(frame, 10);
    function frame() {
        if (width <= 0) {
            clearInterval(id);
            moveup(element);
        } else {
            width=width-10; 
            elem.style.width = width + 'px'; 
        }
    }
}