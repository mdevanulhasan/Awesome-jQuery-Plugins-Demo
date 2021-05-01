// Our Custom Javascript or jQuery Codes is given below.
var icon  = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  //for changing our icons
  if(document.body.classList.contains("dark-theme")){
    icon.src = "img/sun.png";
  }else {
    icon.src = "img/moon.png";
  }
}