
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

	$.ajax({
		url:"../json/list.js",
		dataType: "json",
		type: 'GET'	
	}).done(function(data) {
			let newContent = '';

			newContent += '<div class="poster_container">';
			newContent += '<img src=" ' + dataType.poster +' " />';
			newContent += '</div>';
			newContent += '<div class="summary_container">';
			newContent += '<h2 ' + dataType.title + ' />';
			newContent += '<p ' + dataType.description + ' />';
			newContent += '/div>';
		});

});				



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

