
$(document).ready(function() {

	$(window).scroll(function() {
		if ($(document).scrollTop() > 600) {
			$('#popUp_footer').fadeIn(1000);
		} else {
			$('#popUp_footer').fadeOut(1000);
		}
	});

});

// (function () {
// 		$('.intro h1').fadeIn(500, function () {
// 			$('.intro h2').delay(1000).fadeIn(500);
// 		});
// 	})();