var i = 0;
var p1top = 0;
var p1left = 0;
var p2top = 0;
var p2left = 0;
var p3top = 0;
var p3left = 0;
var p4top = 0;
var p4left = 0;
var p5top = 0;
var p5left = 0;
var objectwidth = 0;
var objectheight = 0;

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    if (i == 0) {
        showp1(x, y);
        i++;
    } else if (i == 1) {
        showp2(x, y);
        i++;
    } else if (i == 2) {
        showp3(x, y);
        i++;
    } else if (i == 3) {
        showp4(x, y);
        i++;
    } else if (i == 4) {
        showp5(x, y);
        i++;
    } else {
        alert("Maximum of 5 points, sorry.");
    }
}

function undo() {
    if (i == 1) {
        document.getElementById("point1").style.display = "none";
        i--;
    }
    if (i == 2) {
        document.getElementById("point2").style.display = "none";
        i--;
    }
    if (i == 3) {
        document.getElementById("point3").style.display = "none";
        i--;
    }
    if (i == 4) {
        document.getElementById("point4").style.display = "none";
        i--;
    }
    if (i == 5) {
        document.getElementById("point5").style.display = "none";
        i--;
    }
}

function showp1(x, y) {
    var point = document.getElementById("point1");
    point.style.display = "block";
    point.style.top = (y - 10) + "px";
    point.style.left = (x - 5) + "px";
}

function showp2(x, y) {
    var point = document.getElementById("point2");
    point.style.display = "block";
    point.style.top = (y - 10) + "px";
    point.style.left = (x - 5) + "px";
}

function showp3(x, y) {
    var point = document.getElementById("point3");
    point.style.display = "block";
    point.style.top = (y - 10) + "px";
    point.style.left = (x - 5) + "px";
}

function showp4(x, y) {
    var point = document.getElementById("point4");
    point.style.display = "block";
    point.style.top = (y - 10) + "px";
    point.style.left = (x - 5) + "px";
}

function showp5(x, y) {
    var point = document.getElementById("point5");
    point.style.display = "block";
    point.style.top = (y - 10) + "px";
    point.style.left = (x - 5) + "px";
}

function getvalues() {
    var imgwidth = 100;
    var imgheight = 100;
    var fadein = 500;
    var fadeout = 500;
    var move1 = 500;
    var move2 = 500;
    var move3 = 500;
    var move4 = 500;
    var x = document.getElementById("values");
    imgwidth = x.elements[0].value;
    imgheight = x.elements[1].value;
    fadein = x.elements[2].value;
    fadeout = x.elements[3].value;
    move1 = x.elements[4].value;
    move2 = x.elements[5].value;
    move3 = x.elements[6].value;
    move4 = x.elements[7].value;
    if (imgwidth == "") {
        imgwidth = 100;
    }
    if (imgheight == "") {
        imgheight = 100;
    }
    if (fadein == "") {
        fadein = 500;
    }
    if (fadeout == "") {
        fadeout = 500;
    }
    if (move1 == 0) {
        move1 = 500;
    }
    if (move2 == 0) {
        move2 = 500;
    }
    if (move3 == 0) {
        move3 = 500;
    }
    if (move4 == 0) {
        move4 = 500;
    }
    document.getElementById("object").src = "http://placehold.it/" + (imgwidth * 1) + "x" + (imgheight * 1) + "";
    var delaynum = (fadein * 1) + (fadeout * 1) + (move1 * 1) + (move2 * 1) + (move3 * 1) + (move4 * 1);
    objectheight = ($('#object').height() / 2);
    objectwidth = ($('#object').width() / 2);
    document.getElementById("undobutton").disabled = true;
    document.getElementById("movebutton").disabled = true;
    setTimeout(function () {
        document.getElementById("movebutton").disabled = false;
        document.getElementById("undobutton").disabled = false;
    }, delaynum * 1);
    moveit(fadein, move1, move2, move3, move4, fadeout);
}

function moveit(fi, m1, m2, m3, m4, fo) {
    if (i < 1) {
        alert("An error occurred. Please refresh the page.");
    } else {
        if (i == 1) {
            var p1 = document.getElementById("point1");
            p1top = parseInt(p1.style.top) + 10;
            p1left = parseInt(p1.style.left) + 5;
            $('#object').animate({
                    top: p1top - objectheight,
                    left: p1left - objectwidth
                }, 0,
                function () {
                    $('#object').fadeIn(fi * 1,
                        function () {
                            $('#object').fadeOut(fo * 1)
                        })
                }
            );
        } else if (i == 2) {
            var p1 = document.getElementById("point1");
            var p2 = document.getElementById("point2");
            p1top = parseInt(p1.style.top) + 10;
            p1left = parseInt(p1.style.left) + 5;
            p2top = parseInt(p2.style.top) + 10;
            p2left = parseInt(p2.style.left) + 5;
            $('#object').animate({
                    top: p1top - objectheight,
                    left: p1left - objectwidth
                }, 0,
                function () {
                    $('#object').fadeIn(fi * 1,
                        function () {
                            $('#object').animate({
                                    top: p2top - objectheight,
                                    left: p2left - objectwidth
                                }, m1 * 1,
                                function () {
                                    $('#object').fadeOut(fo * 1)
                                }
                            );
                        })
                })
        } else if (i == 3) {
            var p1 = document.getElementById("point1");
            var p2 = document.getElementById("point2");
            var p3 = document.getElementById("point3");
            p1top = parseInt(p1.style.top) + 10;
            p1left = parseInt(p1.style.left) + 5;
            p2top = parseInt(p2.style.top) + 10;
            p2left = parseInt(p2.style.left) + 5;
            p3top = parseInt(p3.style.top) + 10;
            p3left = parseInt(p3.style.left) + 5;
            $('#object').animate({
                    top: p1top - objectheight,
                    left: p1left - objectwidth
                }, 0,
                function () {
                    $('#object').fadeIn(fi * 1,
                        function () {
                            $('#object').animate({
                                    top: p2top - objectheight,
                                    left: p2left - objectwidth
                                }, m1 * 1,
                                function () {
                                    $('#object').animate({
                                            top: p3top - objectheight,
                                            left: p3left - objectwidth
                                        }, m2 * 1,
                                        function () {
                                            $('#object').fadeOut(fo * 1)
                                        }
                                    );
                                })
                        })
                })
        } else if (i == 4) {
            var p1 = document.getElementById("point1");
            var p2 = document.getElementById("point2");
            var p3 = document.getElementById("point3");
            var p4 = document.getElementById("point4");
            p1top = parseInt(p1.style.top) + 10;
            p1left = parseInt(p1.style.left) + 5;
            p2top = parseInt(p2.style.top) + 10;
            p2left = parseInt(p2.style.left) + 5;
            p3top = parseInt(p3.style.top) + 10;
            p3left = parseInt(p3.style.left) + 5;
            p4top = parseInt(p4.style.top) + 10;
            p4left = parseInt(p4.style.left) + 5;
            $('#object').animate({
                    top: p1top - objectheight,
                    left: p1left - objectwidth
                }, 0,
                function () {
                    $('#object').fadeIn(fi * 1,
                        function () {
                            $('#object').animate({
                                    top: p2top - objectheight,
                                    left: p2left - objectwidth
                                }, m1 * 1,
                                function () {
                                    $('#object').animate({
                                            top: p3top - objectheight,
                                            left: p3left - objectwidth
                                        }, m2 * 1,
                                        function () {
                                            $('#object').animate({
                                                    top: p4top - objectheight,
                                                    left: p4left - objectwidth
                                                }, m3 * 1,
                                                function () {
                                                    $('#object').fadeOut(fo * 1)
                                                }
                                            );
                                        }
                                    )
                                })
                        })
                })
        } else {
            var p1 = document.getElementById("point1");
            var p2 = document.getElementById("point2");
            var p3 = document.getElementById("point3");
            var p4 = document.getElementById("point4");
            var p5 = document.getElementById("point5");
            p1top = parseInt(p1.style.top) + 10;
            p1left = parseInt(p1.style.left) + 5;
            p2top = parseInt(p2.style.top) + 10;
            p2left = parseInt(p2.style.left) + 5;
            p3top = parseInt(p3.style.top) + 10;
            p3left = parseInt(p3.style.left) + 5;
            p4top = parseInt(p4.style.top) + 10;
            p4left = parseInt(p4.style.left) + 5;
            p5top = parseInt(p5.style.top) + 10;
            p5left = parseInt(p5.style.left) + 5;
            $('#object').animate({
                    top: p1top - objectheight,
                    left: p1left - objectwidth
                }, 0,
                function () {
                    $('#object').fadeIn(fi * 1,
                        function () {
                            $('#object').animate({
                                    top: p2top - objectheight,
                                    left: p2left - objectwidth
                                }, m1 * 1,
                                function () {
                                    $('#object').animate({
                                            top: p3top - objectheight,
                                            left: p3left - objectwidth
                                        }, m2 * 1,
                                        function () {
                                            $('#object').animate({
                                                    top: p4top - objectheight,
                                                    left: p4left - objectwidth
                                                }, m3 * 1,
                                                function () {
                                                    $('#object').animate({
                                                            top: p5top - objectheight,
                                                            left: p5left - objectwidth
                                                        }, m4 * 1,
                                                        function () {
                                                            $('#object').fadeOut(fo * 1)
                                                        }
                                                    );
                                                })
                                        })
                                })
                        })
                })
        }
    }
}


function showcode() {
    var code = document.getElementById("code");
    code.style.display = "block";
    printcode();
}

function printcode() {
    var x = document.getElementById("values");
    imgwidth = x.elements[0].value;
    imgheight = x.elements[1].value;
    fadein = x.elements[2].value;
    fadeout = x.elements[3].value;
    move1 = x.elements[4].value;
    move2 = x.elements[5].value;
    move3 = x.elements[6].value;
    move4 = x.elements[7].value;
    if (imgwidth == "") {
        imgwidth = 100;
    }
    if (imgheight == "") {
        imgheight = 100;
    }
    if (fadein == "") {
        fadein = 500;
    }
    if (fadeout == "") {
        fadeout = 500;
    }
    if (move1 == 0) {
        move1 = 500;
    }
    if (move2 == 0) {
        move2 = 500;
    }
    if (move3 == 0) {
        move3 = 500;
    }
    if (move4 == 0) {
        move4 = 500;
    }
    printhtml();
    printcss(imgwidth, imgheight);
    printjs(fadein, fadeout, move1, move2, move3, move4);
}

function printhtml() {
    var tempstring = "<xmp><div id =\"object\"></div></xmp>"
    var htmlcode = document.getElementById("htmlcode");
    htmlcode.innerHTML = "<pre><xmp><body onload=\"move()\"></xmp>" +
        tempstring +
        "</pre>";
}

function printcss(imgwidth, imgheight) {
    var csscode = document.getElementById("csscode");
    csscode.innerHTML = "<pre><xmp>#object {</xmp>" +
        "<xmp>position: absolute;</xmp>" +
        "<xmp>display: none;</xmp>" +
        "<xmp>width: " + imgwidth + "px;</xmp>" +
        "<xmp>height: " + imgheight + "px;</xmp>" +
        "<xmp>}</xmp></pre>";
}

function printjs(fi, fo, m1, m2, m3, m4) {
    var jscode = document.getElementById("jscode");
    if (i == 1) {
        jscode.innerHTML = "<pre><xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p1top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p1left - objectwidth) + "</xmp>" +
            "<xmp>}, 0,</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeIn(" + fi + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeOut(" + fo + ")</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>);</xmp>" +
            "<xmp>})</xmp>" +
            "</pre>";
    }
    if (i == 2) {
        jscode.innerHTML = "<pre><xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p1top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p1left - objectwidth) + "</xmp>" +
            "<xmp>}, 0,</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeIn(" + fi + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p2top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p2left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m1 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeOut(" + fo + ")</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>);</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "</pre>";
    }
    if (i == 3) {
        jscode.innerHTML = "<pre><xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p1top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p1left - objectwidth) + "</xmp>" +
            "<xmp>}, 0,</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeIn(" + fi + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p2top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p2left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m1 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p3top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p3left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m2 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeOut(" + fo + ")</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>);</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "</pre>";
    }
    if (i == 4) {
        jscode.innerHTML = "<pre><xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p1top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p1left - objectwidth) + "</xmp>" +
            "<xmp>}, 0,</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeIn(" + fi + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p2top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p2left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m1 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p3top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p3left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m2 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p4top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p4left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m3 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeOut(" + fo + ")</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>);</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "</pre>";
    }
    if (i == 5) {
        jscode.innerHTML = "<pre><xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p1top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p1left - objectwidth) + "</xmp>" +
            "<xmp>}, 0,</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeIn(" + fi + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p2top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p2left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m1 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p3top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p3left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m2 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').animate({</xmp>" +
            "<xmp>top: " + (p4top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p4left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m3 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp> $('#object').animate({</xmp>" +
            "<xmp>top: " + (p5top - objectheight) + ",</xmp>" +
            "<xmp>left: " + (p5left - objectwidth) + "</xmp>" +
            "<xmp>}, " + m4 + ",</xmp>" +
            "<xmp>function () {</xmp>" +
            "<xmp>$('#object').fadeOut(" + fo + ")</xmp>" +
            "<xmp>}</xmp>" +
            "<xmp>);</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "<xmp>})</xmp>" +
            "</pre>";
    }
}

function mainpagemove() {
    $('#mainpageobject').animate({
                top: -30,
                left: 125
            }, 500,
            function () {
                $('#mainpageobject').animate({
                        top: 30,
                        left: 250
                    }, 500,
                    function () {
                        $('#mainpageobject').animate({
                                top: -30,
                                left: 375
                            }, 500,
                            function () {
                                $('#mainpageobject').animate({
                                        top: 30,
                                        left: 500
                                    }, 500,
                                    function () {
                                        $('#mainpageobject').animate({
                                                top: 0,
                                                left: 0
                                            }, 500, mainpagemove() );
                                            }
                                        )
                                    })
                            })
                    })
            }