$(document).foundation()

var tagmap = function() {
  $('#ryan').foundation('open');
}

var map = document.getElementById("tagmap");
var img = document.getElementById("team_pic");

console.log(img.height);
console.log(img.width);

var scaleX = img.width / 2048;
var scaleY = img.height / 1365;

var ryan = document.createElement("area");
ryan.setAttribute("shape", "circle");
ryan.setAttribute("coords", Math.round(1111*scaleX) + "," + Math.round(666*scaleY) + "," + Math.round(60*scaleX));
ryan.setAttribute("alt", "ryan");
//ryan.addEventListener("mouseover", tagmap);
ryan.addEventListener("click", tagmap);
map.appendChild(ryan);
