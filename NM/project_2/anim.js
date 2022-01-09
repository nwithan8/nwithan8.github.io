// JavaScript Document

//vars for play experiment
var mus = document.getElementById("playing");
var isPlaying = true;
var length = 0.0;
var stayWidth = 0.0;
var id;
var minutes = 0;
var seconds = 0;
var totalminutes = 0;
var totalseconds = 0;
var topmargin = 178;
var pageheight = 0;
var offscreen = 0;
var songend = false;

function song(musicfile, picfile, title, artist) {
    pageheight = document.getElementById('holder').offsetHeight;
    offscreen  = pageheight * 3;
    $('#result').html(
        "<button class=\"fa fa-chevron-down\" style=\"display:block; background-color:transparent; border: 0px; color:white; margin-right:auto;\" onclick=\"moveitdown()\"></button>" +
        "<span style=\"text-align:center; color:forestgreen;\">" +
        title +
        "<span style=\"color:#aeb0b2; font-size: 18px;\">" + artist + "</span>" + "</span>" +
        "<hr>" +
        "<img src=" + picfile + ">" +
        "<audio id=\"playing\" autoplay=\"true\"><source src=" + musicfile + " type=\"audio/mpeg\" /></audio>" +
        "<button id=\"rewind\" class=\"fa fa-backward\" style=\"background-color: forestgreen; height: 4%; width: 9%; border: none; color: white; text-align: center; text-decoration: none; border-radius: 3px;\" onclick=\"rr();\"></button>" +
        "<button id=\"playbutton\" class=\"fa fa-pause\" style=\"background-color: forestgreen; height: 4%; width: 9%; border: none; color: white; text-align: center; text-decoration: none; border-radius: 3px; margin-left:2%; margin-right:2%;\" onclick=\"playpause()\"></button>" +
        "<button id=\"fastforward\" class=\"fa fa-forward\" style=\"background-color: forestgreen; height: 4%; width: 9%; border: none; color: white; text-align: center; text-decoration: none; border-radius: 3px;\" onclick=\"ff();\"></button>")
    clearInterval(id);
    stayWidth = 0;
    time.innerHTML = " 0:00";
    bar.style.width = '0%';
    time.style.width = '0%';
    minutes = 0;
    seconds = 0;
    window.setTimeout(progress, 300);
}

function ff() {
    var mus = document.getElementById("playing");
    if (stayWidth <= mus.duration - 10) {
        mus.currentTime = mus.currentTime + 10;
        stayWidth = stayWidth + 10;
        bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
        time.style.width = ((stayWidth * 100) / mus.duration) + '%';
        minutes = Math.floor(stayWidth / 60);
        seconds = stayWidth % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        time.innerHTML = " " + minutes + ":" + seconds;
    } else {
        mus.currentTime = mus.duration;
        stayWidth = mus.duration;
        bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
        time.style.width = ((stayWidth * 100) / mus.duration) + '%';
        minutes = Math.floor(stayWidth / 60);
        seconds = stayWidth % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        time.innerHTML = " ";
        playpause();
        songend = true;
    }
}

function rr() {
    var mus = document.getElementById("playing");
    if (stayWidth > 10) {
        mus.currentTime = mus.currentTime - 10;
        stayWidth = stayWidth - 10;
        bar.style.width = ((stayWidth * 100) / length) + '%';
        time.style.width = ((stayWidth * 100) / length) + '%';
        minutes = Math.floor(stayWidth / 60);
        seconds = stayWidth % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        time.innerHTML = " " + minutes + ":" + seconds;
    } else {
        mus.currentTime = 0;
        stayWidth = 0;
        bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
        time.style.width = ((stayWidth * 100) / mus.duration) + '%';
        minutes = Math.floor(stayWidth / 60);
        seconds = stayWidth % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        time.innerHTML = " " + minutes + ":" + seconds;
    }
}

function playpause() {
    var mus = document.getElementById("playing");
    if (isPlaying == true) {
        isPlaying = false;
        mus.pause();
        document.getElementById("playbutton").className = "fa fa-play";
        clearInterval(id);
        bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
        time.style.width = ((stayWidth * 100) / mus.duration) + '%';
    } else {
        isPlaying = true;
        if (songend == true) {
            mus.currentTime = 0;
            stayWidth = 0;
            bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
            time.style.width = ((stayWidth * 100) / mus.duration) + '%';
            minutes = Math.floor(stayWidth / 60);
            seconds = stayWidth % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            time.innerHTML = " " + minutes + ":" + seconds;
            songend = false;
        }
        mus.play();
        document.getElementById("playbutton").className = "fa fa-pause";
        progress();
    }
}

function stopmusic() {
    var mus = document.getElementById("playing");
    mus.pause();
    mus.currentTime = 0;
    document.getElementById("playbutton").className = "fa fa-play";
    clearInterval(id);
    stayWidth = 0;
    bar.style.width = ((stayWidth * 100) / mus.duration) + '%';
    time.style.width = ((stayWidth * 100) / mus.duration) + '%';
    minutes = 0;
    seconds = 0;
    time.innerHTML = " ";
}

function progress() {
    var mus = document.getElementById("playing");
    length = parseInt(mus.duration);
    var temp = parseInt(mus.duration);
    totalminutes = Math.floor(temp / 60);
    totalseconds = temp % 60;
    if (totalseconds < 10) {
        totalseconds = "0" + totalseconds;
    }
    var bar = document.getElementById("bar");
    id = setInterval(frame, 1000);

    function frame() {
        if (stayWidth >= length) {
            clearInterval(id);
            stayWidth = 0;
        } else {
            stayWidth++;
            bar.style.width = ((stayWidth * 100) / length) + '%';
            time.style.width = ((stayWidth * 100) / length) + '%';
            minutes = Math.floor(stayWidth / 60);
            seconds = stayWidth % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            time.innerHTML = " " + minutes + ":" + seconds;
        }
    }
}

$(function () {
    $(".draggable").draggable(); //all instances of draggable class are now draggable
    $("#result").droppable(); //#droppable id, just one div tag, is now droppable
});

function moveit() {
    $('#result').animate({
            top: offscreen
        }, 0,
        function () {
            $('#result').fadeIn(100,
                function () {
                    $('#result').animate({
                        top: topmargin
                    }, 600)
                }
            )
        }
    )
}

function goodsoul() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

//EXPERIMENT
function moveitdown() {
    stopmusic();
    $('#result').animate({
            top: offscreen,
        }, 600,
        function () {
            $('#result').fadeOut(100)
        }
    )
}

//BACKUP
function oldthing(tm, lm) {
    $('#result').fadeOut(0,
        function () {
            $('#result').animate({
                    top: 2000,
                    left: lm
                }, 0,
                moveit(tm, lm))
        }
    )
}