//HTML RELATED

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}

function checktext() {
    if (document.getElementById("bodytext").value.trim() != '' && document.getElementById("email").value.trim() != '') {
        document.getElementById("sendButton").disabled = false;
    } else {
        document.getElementById("sendButton").disabled = true;
    }
}

var downloadPubKey = function() {
    var blob = new Blob([$('#newPublicKey').val()], {type: "text/plain;charset=utf-8"});
	saveAs(blob, email + "-public.asc");

	return false;
}

var downloadPriKey = function() {
    var blob = new Blob([$('#newPrivateKey').val()], {type: "text/plain;charset=utf-8"});
	saveAs(blob, email + "-private.asc");

	return false;
}



//ENCRYPTION

var msg = "";
var email = "";

var passphrase = 'testing';

//var encryptedMessage = "";

function encryptSend() {
    msg = document.getElementById("bodytext").value;
    email = document.getElementById("email").value;

    //Encrypt message to Nate's key
    var options1 = {
        data: $("#bodytext").val(),
        publicKeys: openpgp.key.readArmored($(".public-key-js").html()).keys
    };
    var options2 = {
        userIds: [{
            name: "Name",
            email: email
        }],
        numBits: 2048,
        passphrase: passphrase
    };

    openpgp.encrypt(options1).then(function (ciphertext) {
        var encryptedMessage = ciphertext.data;
        //console.log(encryptedMessage);
        openpgp.generateKey(options2).then(function (key) {
            var newPri = key.privateKeyArmored;
            //console.log(newPri);
            var newPub = key.publicKeyArmored;
            //console.log(newPub);
            var pubKeyString = newPub.toString();
            var priKeyString = newPri.toString();
            $("#newPublicKey").val(pubKeyString);
            $("#newPrivateKey").val(priKeyString);
            document.getElementById("password").innerHTML = "<b>PASSWORD: </b>" + passphrase;
            //console.log(pubKeyString);
            //var revocationCertificate = key.revocationCertificate;
            //console.log(newPub.toString());
            sendEmail(encryptedMessage, pubKeyString);
        })
    });
    document.getElementById("download_area").style.visibility = "visible";
    document.getElementById("download_area").style.display = "block";
};

function sendEmail(message, senderKey) {
    var link = "mailto:n8gr8gbln@gmail.com?subject=New%20Encrypted%20Message&body=";
    var finalEncryptedMessage = "";
    var lines = message.split("\n");
    for (i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        finalEncryptedMessage = finalEncryptedMessage + lines[i] + "%0D%0A";
    }
    var finalSenderPubKey = "";
    
    console.log(senderKey);
    lines = senderKey.split("\n");

    for (i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        finalSenderPubKey = finalSenderPubKey + lines[i] + "%0D%0A";
    }
    var senderPGPMessage = "Sent from: " + email + "%0D%0A" + finalSenderPubKey;
    
    teststring = "";
    for(i=0;i<100;i++) {
        teststring = teststring + 1;
    }
    
    link = link + finalEncryptedMessage + senderPGPMessage;
    console.log(link);
    
    document.location = "mailto:n8gr8gbln@gmail.com?subject=New%20Encrypted%20Message&body=" + finalEncryptedMessage + "%0D%0ASent from: " + email + "%0D%0A[copy and paste your PUBLIC key here]";
};