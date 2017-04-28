/* GP 2017 */


var timer;

$(document).ready(function () {

	var biezacy =  $('.gallery-item:first');
    var items = $('.gallery-item');
    var $gallery = $('.gallery-section');

    // items.hide();
    // biezacy.show();

	var animuj = function () {

        var nastepny = biezacy.next();

		if (nastepny.length === 0) {
            nastepny = $('.gallery-item:first');
        }

        $gallery.removeClass('visible');

        setTimeout(function(){
            $gallery.css('background-image', 'url(' + nastepny.attr('src') + ')').addClass('visible');
        }, 300);

        biezacy = nastepny;

        timer = setTimeout(animuj, $gallery.attr('data-time'));
    };

    // animuj();
});
