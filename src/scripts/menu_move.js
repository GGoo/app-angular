
/* GP 2017 */

(function($) {
    'use strict';
    
    // deklaracja zmiennych dla modułu
    var $body = [],
        $window = [],
        $navLinks = [];
    
    /**
     * Opis funkcji
     * 
     * @param     {event}    event      Standardowy obiekt zdarzenia
     *
     * @return {void}
     */
    function clickNavbarLinkHandler(event) {
        if (event.isDefaultPrevented()) {
            return;
        }
        
        // deklaracje zmiennych lokalnych
        var $link = $(event.target),
            $section = $($link.attr('href')),
            time = $link.attr('data-time') || 1500,
            $eventStart = $.Event('before.gg.slide', {
                section: $section[0],
                time: time
            }),
            $eventFinish = $.Event('finish.gg.slide', {
                section: $section[0],
                time: time
            });
        
        $link.trigger($eventStart);
        
        if ($eventStart.isDefaultPrevented()) {
            return;
        }
        
		$('html, body').stop().animate({
			scrollTop: $section.offset().top
		}, time, function() {
            $link.trigger($eventFinish);
        });
    }
    
    $(function() {
         // deklaracja zmiennych lokalnych tylko dla document ready;
        
        // inicjalizacja zmiennych dla modułu
        $body = $('body');
        $window = $(window);
        $navLinks = $('.link');
        
        $navLinks.on('click.gg.slide', clickNavbarLinkHandler)
            .on('before.gg.slide', function(e) {
                console.log('before.gg.slide', e.time, e.section);
            })
            .on('finish.gg.slide', function(e) {
                console.log('finish.gg.slide', e.time, e.section);
            });
    });
})(jQuery)


//$(document).ready(function() {
//	
//	$(".link").click(function(){
//		
//		var obiekt = $(this);
//		
//		var gdzie = obiekt.attr('href');
//		
//		$('html, body').animate({
//			scrollTop: $(gdzie).offset().top
//		}, 1500);
//		
//		
//	});
//											
//	
//										
//})