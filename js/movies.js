
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

// let myMovies = {
// 	"title" : "John Wick",
// 	"summary" : "He is an awsome hitman"
// }

// let myObj = JSON.parse(myMovies);
// document.getElementById("two .summary_container h2").innerHTML = myMovies.title;