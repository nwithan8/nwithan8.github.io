function prep() {
    cleardemos();
    showresults();
}

function showexamples() {
    var demobars = document.getElementById("demobars");
    demobars.style.display = "block";
}

function hideexamples() {
    var demobars = document.getElementById("demobars");
    demobars.style.display = "none";
}

function cleardemos() {
    var filloutform = document.getElementById("filloutform");
    filloutform.style.display = "block";
    var generate = document.getElementById("generate");
    generate.innerHTML = "<a href=\"bars.html\" style=\"text-decoration:none;\"><button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\">Start Over</button></a>";
}

function showresults() {
    var resultbars = document.getElementById("resultbars");
    resultbars.style.display = "block";
}

function showcode() {
    var code = document.getElementById("code");
    code.style.display = "block";
    printcode();
}

function printcode() {
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
    printhtml(numBars);
    printcss(color1, opacity1, color2, opacity2, color3, opacity3, color4, opacity4, color5, opacity5, color6, opacity6, height);
    printjs(numBars, height, speed);
}