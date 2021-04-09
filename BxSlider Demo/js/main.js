// Our Custom Javascript or jQuery Codes is given below.
$(document).ready(function(){
	// BX Slider
	$('.slider_area').bxSlider({
		//mode: 'fade',
		//mode: 'horizontal',
		//preventDefaultSwipeX: true,
		// slideWidth: 1000,
		mode: 'vertical',
		preventDefaultSwipeY: true,
		pager: true,
		speed: 500,
		startSlide: 1,
		keyboardEnabled: true,
		auto: true,
		autoDirection: 'prev',
		autoHover: true
	});
});