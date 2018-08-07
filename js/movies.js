
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

myMovies = {
	"movie": [
		{
			"title": "Tears of the Sun",
			"description": "Navy SEALS",
			"poster": "img/Tears_of_the_Sun_movie.jpg"
		},
		{
			"title": "John Wick",
			"description": "Hitman",
			"poster": "img/john_wick.jpg"
		},
		{
			"title": "John Wick 2",
			"description": "He is back!",
			"poster": "img/wick2.jpg"
		}
		
	]
}

let xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.onload = function() {
	if (xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);

		let newContent = '';
		for (var i = 0; i < responseObject.movie.length; i++) {
			// newContent += '<div class="poster_container">';
			// newContent += '<img src="' + responseObject.movie[i].poster + ' " />';
			// newContent += '</div>';
			newContent += '<div class="summary_container">';
			newContent += '<h2' + responseObject.movie[i].title + '/>';
			newContent += '<p' + responseObject.movie[i].description + '/>';
			newContent += '</div';
		}

		document.getElementById('one').innerHTML = newContent;
	}
};

xhr.open('GET', 'data/data.json', true);	// Prepare request
// xhr.send(null); 							// Send request