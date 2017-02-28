
/* GP 2017 */

$(document).ready(function(){
    
	var elementZTlem = $('.header');
    
	$(window).on("load scroll",
	
        function() {
            var aktualnyScrollOkna = $(window).scrollTop();
		   
		    //console.log(aktualnyScrollOkna);
			
            var wektorZmianyTla = aktualnyScrollOkna * 0.6;
			
            elementZTlem.css('background-position-y', wektorZmianyTla - 280);
			
        }
    )

});


