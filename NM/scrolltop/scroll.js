// JavaScript Document
$(document).ready(function () {

    $(document).scroll(function () { //this function is active whenever scrolling is taking place

        var top = $(document).scrollTop(); // creates a numeric variable based on whatever the scroll position is at any given moment. 
        $('#tellme').html(top);


        $('#uga').css({
            'top': top
        }); //makes it so that the uga div tag is always in the same vertical location (top) as the scroll position based on the top variable. 

        if (top > 300) $('#arch').show();
        if (top < 300) $('#arch').hide();
        if (top > 650) $('#arch').hide();

        if (top > 715) $('#library').show();
        if (top < 715) $('#library').hide();
        if (top > 2020) $('#library').hide();

        if (top > 2040) $('#stadium').show();
        if (top < 2040) $('#stadium').hide();
        if (top > 4600) $('#stadium').hide();

        if (top > 4615) $('#grady').show();
        if (top < 4615) $('#grady').hide();
        if (top > 6725) $('#grady').hide();

        if (top > 6740) $('#geography').show();
        if (top < 6740) $('#geography').hide();
        if (top > 8660) $('#geography').hide();
    });
});