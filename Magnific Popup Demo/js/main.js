// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Our Custom Javascript or jQuery Codes is given below.
(function ($) {
  // Single Image
  $('.single-img').magnificPopup({
    items: [
      {
        src: 'img/f1.jpg',
        title: 'This is our image caption.'
      }
    ],
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  // Image Gallery
  $('.gallery-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  // YouTube Video
  $('.yt-vdo-popup').magnificPopup({
    type: 'iframe'
  });
  // Vimeo Video
  $('.vm-vdo-popup').magnificPopup({
    items: [
      {
        src: 'https://vimeo.com/252411258'
      }
    ],
    type: 'iframe'
  });
  // Google Map
  $('.map').magnificPopup({
    type: 'iframe'
  });
  // Modal Popup
  $('.popup').magnificPopup({
    items: [
      {
        src: $('<div class="purple-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="purple-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#our-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  // All Popup Together
  $('#open-popup').magnificPopup({
    items: [
      {
        src: 'https://images.pexels.com/photos/6587608/pexels-photo-6587608.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'This is our caption.'
      },
      {
        src: 'img/f1.jpg',
        title: 'This is our caption.'
      },
      {
        src: 'https://www.youtube.com/watch?v=cezsFi_522M',
        type: 'iframe'
      },
      {
        src: 'href="https://vimeo.com/252411258',
        type: 'iframe'
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
})(jQuery);