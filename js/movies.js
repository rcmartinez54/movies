
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

	$('button').on('click', function () {
		$.ajax({url:"myMovies.json", success: function(result){
			$('#ajax_test').html(result);
		}});
	});

});

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
// 	if (xhr.readyState === 4 && xhr.status === 200) {
// 		myMovies = JSON.parse(xhr.responseText);
		
// 		let $newContent = '';

// 		for (var i = 0; i < myMovies.length; i += 1) {
// 			$newContent += '<div class="poster_container">',
// 						+= '<img src="' + myMovies.'"'

// 		}
		
// 	} 
// }

// xhr.open('GET', 'data/myMovies.json');	
// xhr.send(); 							




// let xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

// xhr.onload = function() {
// 	if (xhr.status === 200) {
// 		responseObject = JSON.parse(xhr.responseText);

// 		let newContent = '';
// 		for (var i = 0; i < responseObject.movie.length; i++) {
// 			newContent += '<div class="poster_container">';
// 			newContent += '<img src="' + responseObject.movie[i].poster + ' " />';
// 			newContent += '</div>';
// 			newContent += '<div class="summary_container">';
// 			newContent += '<h2' + responseObject.movie[i].title + '/>';
// 			newContent += '<p' + responseObject.movie[i].description + '/>';
// 			newContent += '</div';
// 		}

// 		document.getElementById('one').innerHTML = newContent;
// 	}
// };

