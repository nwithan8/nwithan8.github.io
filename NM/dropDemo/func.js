$(document).ready(function(){
  

$( "body" ).mousedown(function( event ) {   //the mousedown event applies to the entire document
    whichdiv2= event.target;  //sets the clicked div tag to a specific variable. later on we will use this to make whichever div is clicked to become invisible
  
});// mousedown function ends here
});//document.ready ends here



$(function() {
    $( ".draggable" ).draggable(); //all instances of draggable class are now draggable
    $( "#droppable" ).droppable(); //#droppable id, just one div tag, is now droppable
  });
 
function dragit(content,song){sumthing=content;thesong=song;}   //this function is used to set the text and the name of a music file that will be used later in the dropit function. Please note that the two arguments, content and song, are then set to variables sumthing, and thesong. The reason for this complicated maneuver is so that this information can be passed later to the dropit function. 
   
function dropit(){$('#droppable').html(sumthing);  //sets #droppable html to content argument sumthing that was set with the dragit function. 
   
var xx=0;  // this variable starts at 0 for animation purposes 
    $(whichdiv2).css("opacity", 0);  
//changes opacity of the div that was dragged to 0 which makes it invisible. 
    
while (xx<1111){  
  $("#munk").animate({"left": "+=1px", "top": "-=2px"},1);   
    //animates the yellow munk balloon div tag
  xx++;
};
    
 $('#player').html('<audio autoplay="true"><source src="'+thesong+'" type="audio/mpeg" /></audio>'); 
//plays the 'correct' audio inside of the player div. Remember, thesong was set in the dragit function. 

    
}  // dropit function ends here

