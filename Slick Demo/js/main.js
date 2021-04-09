// Our Custom Javascript or jQuery Codes is given below.
$('.slider').slick({
	dots: true,
    infinite: true,
	speed: 300,
    slideToShow: 1,
    slideToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});