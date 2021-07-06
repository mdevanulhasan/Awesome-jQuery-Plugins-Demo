// Our Custom Javascript or jQuery Codes is given below.
(function ($) {
  // Sticky Navbar
  $('.js_sticky').waypoint(function(direction){
    if(direction == "down") {
      $('nav').addClass('sticky');
    }
    else {
      $('nav').removeClass('sticky');
    }
  });
  // Active Nav Link
  $('nav ul li a').click(function(){
    $('nav ul li a').removeClass("active"),
    $(this).addClass("active")
  }),
  $('nav a.navbar-brand').click(function(){
    $('nav ul li a').removeClass("active"),
    $('nav ul li:first-child a').addClass("active")
  });
  /* One Page Nav */
  $('#myNav ul').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    easing: 'swing',
    scrollOffset: 60
  });
})(jQuery);