function Homem (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Homem.jpeg";
}
function Mulher (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Mulher.jpeg";
}
function OrcMacho (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Orc macho.jpeg";
}
function OrcFemea (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Orc Femea.jpeg";
}
function Anao (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Anão.jpeg";
}
function Ana (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Anã.jpeg";
}
function Centauro (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Centauro.jpeg";
}
function Centaura (){
    document.getElementById("Barbaro").src="../img/Raças Barbaro/Centaura.jpeg";
}

function exito(){
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var raca = document.getElementById("raca");
    var alt = document.getElementById("alt");
    var sexo = document.getElementById("sexo");
    var peso = document.getElementById("pe");
    if(parseInt(idade.value) > 130 && raca.value == "H"){
        
        alert("Invalido");
    }
    else{
        alert("O Heroi "+nome.value+", com idade "+idade.value+
        ", sendo da Raça "+raca.value+", com altura de "+alt.value+
        ", sexo "+sexo.value+" e pesando "+peso.value);
    }

}