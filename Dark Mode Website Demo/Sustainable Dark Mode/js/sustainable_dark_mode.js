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
var icon = document.getElementById("icon");
if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");
if(localData == "light"){
  icon.src = "img/moon.png";
  document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
  icon.src = "img/sun.png";
  document.body.classList.add("dark-theme");
}
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "img/sun.png";
    localStorage.setItem("theme", "dark");
  }else {
    icon.src = "img/moon.png";
    localStorage.setItem("theme", "light");

  }
}