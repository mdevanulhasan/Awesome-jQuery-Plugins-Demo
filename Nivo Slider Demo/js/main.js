$(window).load(function() {
	$('#slider').nivoSlider({
	effect: 'random',
	slices: 15,
	boxCols: 10,
	boxRows: 4,
	animSpeed: 500,
	pauseTime: 3000,
	startSlide: 0,
	// startSlide: 2,
	directionNav: true,
	//directionNav: false,
	controlNav: true,
	//controlNav: false,
	controlNavThumbs: false,
	pauseOnHover: true,
	//pauseOnHover: false,
	manualAdvance: false,
	prevText: 'Prev',
	nextText: 'Next',
	randomStart: false,
	// randomStart: true,
	beforeChange: function(){},
	afterChange: function(){},
	slideshowEnd: function(){},
	lastSlide: function(){},
	afterLoad: function(){}
	});
});