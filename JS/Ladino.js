function Homem() {
  document.getElementById("Ladino").src = "../img/Tipo Ladino/Homem.jpeg";
}
function Mulher() {
  document.getElementById("Ladino").src = "../img/Tipo Ladino/Mulher.jpeg";
}
function Elfo() {
  document.getElementById("Ladino").src = "../img/Tipo Ladino/Elfo.jpeg";
}
function Elfa() {
  document.getElementById("Ladino").src = "../img/Tipo Ladino/Elfa.jpeg";
}

function exito() {
  var nome = document.getElementById("nome");
  var age = document.getElementById("age");
  var raca = document.getElementById("raca");
  var height = document.getElementById("height");
  var genre = document.getElementById("genre");
  var peso = document.getElementById("pe");
  if (
    (parseInt(age.value) > 130 && raca.value == "H") ||
    parseInt(height.value) > 200
  ) {
    alert("Invalido");
  } else {
    alert(
      "O Heroi " +
        nome.value +
        ", com age " +
        age.value +
        ", sendo da Raça " +
        raca.value +
        ", com altura de " +
        height.value +
        ", genre " +
        genre.value +
        " e pesando " +
        peso.value
    );
  }
}
