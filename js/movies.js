$(document).ready(function() {

	$(window).scroll(function() {
		if ($(document).scrollTop() > 900) {
			$('header').fadeOut(500, function () {
				$('#popUp_header').fadeIn(500);	
			});
			
		} else {
			$('#popUp_header').fadeOut(500, function () {
				$('header').fadeIn(500);	
			});
		}

		if($(document).scrollTop() > 2500) {
			$('#popUp_footer').fadeIn(500);
		}

		if($(document).scrollTop() > 6500 && !$('#popUp_footer').is(':visible')) {
			$('#popUp_footer2').fadeIn(500);
		}

	});

	$('#popUp_footer span').on('click', function () {
		$('#popUp_footer').fadeOut(500, function () {
			$(this).remove();
		});
	});

	$('#popUp_footer2 span').on('click', function () {
		$('#popUp_footer2').fadeOut(500, function () {
			$(this).remove();
		});
	});

		
   $.getJSON('js/list.json', function (data) {

	let movieList = data.movie;

	let newContent = '';

	for (var i = 0; i < movieList.length; i++) {
		newContent += '<li class="movie clearfix">';
		newContent += '<div class="poster_container">';
		newContent += '<img src="' + movieList[i].poster +'" />';
		newContent += '</div>';
		newContent += '<div class="summary_container clearfix">';
		newContent += '<h2>' + movieList[i].title + '</h2>';
		newContent += '<p>' + movieList[i].description + '</p>';
		newContent += '<span><i>' + movieList[i].cast + '</i></span>';
		newContent += '</div>';
		newContent += '</li>';

	}

	$('#list ul').append(newContent);

	
	});	

});