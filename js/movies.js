
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

	// for (var i = 0; i < movieList.length; i++) {

	// 	var movieList = data.movie,
	// 	newContent;

	// 	$.getJSON('js/list.json', function (data) {
	// 		newContent += '<li class="movie clearfix">';
	// 		newContent += '<div class="poster_container">';
	// 		newContent += '<img src="' + movieList[i].poster +'" />';
	// 		newContent += '</div>';
	// 		newContent += '<div class="summary_container clearfix">';
	// 		newContent += '<h2>' + movieList[i].title + '</h2>';
	// 		newContent += '<p>' + movieList[i].description + '</p>';
	// 		newContent += '</div>';
	// 		newContent += '</li>';

	// 		$('#list ul').append(newContent);
	// 	});
	// }




	$.getJSON('js/list.json', function (data) {

			var movieList = data.movie;

			var newContent;

			for (var i = 0; i < movieList.length; i++) {
				newContent += '<li class="movie clearfix">';
				newContent += '<div class="poster_container">';
				newContent += '<img src="' + movieList[i].poster +'" />';
				newContent += '</div>';
				newContent += '<div class="summary_container clearfix">';
				newContent += '<h2>' + movieList[i].title + '</h2>';
				newContent += '<p>' + movieList[i].description + '</p>';
				newContent += '</div>';
				newContent += '</li>';

			}

			$('#list ul').append(newContent);
			console.log(movieList.length);
		
	});

	

});				