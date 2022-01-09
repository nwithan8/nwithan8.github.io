// JavaScript Document


function song(musicfile, picfile, title){$('#result').html(title + "<audio  autoplay=\"true\"><source src=" + musicfile + " type=\"audio/mpeg\" /></audio><img src=" + picfile + ">")}


function moveit(tm,lm) { 	
     $('#result').fadeIn(899,
	 function(){$('#result').animate({ top: tm,  left: lm}, 2822, 
	 function(){ $('#result').animate({ top: 333,  left: 333}, 822,
	  function(){ $('#result').fadeOut(999)}
	 );}
	)
})}


 