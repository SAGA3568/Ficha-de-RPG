var slide = document.getElementById("slide");
var grupo = [
  "img/grupo.jpg",
  "img/grupo2.jpg",
  "img/grupo3.jpg",
  "img/grupo4.jpg",
  "img/grupo5.jpeg",
  "img/grupo6.jpg",
];
var i = 0;

function slides() {
  slide.src = grupo[i];

  if (i < grupo.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(slides, 4000);
}
window.addEventListener("load", slides);
