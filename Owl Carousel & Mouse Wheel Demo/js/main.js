// Our Custom Javascript or jQuery Codes is given below.
$(document).ready(function(){
	$(document).ready(function() {
		// Owl CAROUSEL SLIDER
		var owl = $('.owl-carousel');
		owl.owlCarousel({
		margin: 15,
		items: 2,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		autoplaySpeed: false,
		dragEndSpeed: false,
		freeDrag: false,
		dots: true,
		nav: true,
		stagePadding: 50,
		rtl: false,
		video: false,
		startPosition: 0,
		responsiveClass: true,
		responsiveRefreshRate: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
		});
		// MOUSE WHEEL
		owl.on('mousewheel', '.owl-stage', function(e) {
		if (e.deltaY > 0) {
		  owl.trigger('next.owl');
		} else {
		  owl.trigger('prev.owl');
		}
		e.preventDefault();
	  });
	})
});