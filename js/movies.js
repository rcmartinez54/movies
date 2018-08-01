
$(document).ready(function() {

	$(window).scroll(function() {
		if ($(document).scrollTop() > 700) {
			$('#popUp_footer').fadeIn(1000);
			$('header').fadeOut(1000);
		} else {
			$('#popUp_footer').fadeOut(1000);
			$('header').fadeIn(1000);
		}
	});

});

// myMovies = {
// 	"title" : "John Wick",
// 	"posterLocation" : "img/johnWick.jpg"
// 	"summary" : "He is an awsome hitman"
// }