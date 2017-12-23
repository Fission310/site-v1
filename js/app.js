$(document).foundation()

var tagmap = function() {
  $('#' + this.getAttribute("alt")).foundation('open');
}

var map = document.getElementById("tagmap");
var img = document.getElementById("team_pic");

var scaleX = (img.width+5) / 2048;
var scaleY = (img.height+5) / 1365;

var people = {
  'ryan': [1111, 666, 60],
  'jt': [706, 416, 52],
  'lili': [326, 314, 48],
  'jon': [886, 670, 60],
  'max': [1484, 642, 60],
  'saahir': [756, 320, 40],
  'matthew': [600, 790, 60],
  'aleks': [716, 164, 40],
  'ish': [910, 322, 40],
  'junming': [1818, 708, 64],
  'megan': [522, 388, 48],
  'dario': [600, 330, 35],
  'anthonyL': [1232, 346, 42],
  'aaron': [1008, 318, 48],
  'sam': [1430, 554, 42]
}

for (var person in people) {
  var a = document.createElement("area");
  a.setAttribute("shape", "circle");
  a.setAttribute("coords", Math.round(people[person][0]*scaleX) + "," + Math.round(people[person][1]*scaleY) + "," + Math.round(people[person][2]*scaleX));
  a.setAttribute("alt", person);
  //a.addEventListener("mouseover", tagmap);
  a.addEventListener("click", tagmap);
  map.appendChild(a);
}

var things = {
  'robot': [774, 1018, 1092, 1286],
  'motivate': [958, 586, 1000, 720],
  'winning': [1428, 784, 1476, 974]
}

for (var thing in things) {
  var a = document.createElement("area");
  a.setAttribute("shape", "rect");
  a.setAttribute("coords", Math.round(things[thing][0]*scaleX) + "," + Math.round(things[thing][1]*scaleY) + "," + Math.round(things[thing][2]*scaleX) + "," + Math.round(things[thing][3]*scaleY));
  a.setAttribute("alt", thing);
  //a.addEventListener("mouseover", tagmap);
  a.addEventListener("click", tagmap);
  map.appendChild(a);
}
