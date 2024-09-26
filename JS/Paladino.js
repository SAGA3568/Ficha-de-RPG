function Homem() {
  document.getElementById("Paladino").src = "../img/Paladino/Paladino.jpeg";
}
function Mulher() {
  document.getElementById("Paladino").src = "../img/Paladino/Paladina.jpeg";
}

function exito() {
  var nome = document.getElementById("nome");
  var age = document.getElementById("age");
  var raca = document.getElementById("raca");
  var height = document.getElementById("height");
  var genre = document.getElementById("genre");
  var peso = document.getElementById("pe");
  if (parseInt(age.value) > 130) {
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
