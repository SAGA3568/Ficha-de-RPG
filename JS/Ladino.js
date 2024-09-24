function Homem (){
    document.getElementById("Ladino").src="../img/Tipo Ladino/Homem.jpeg";
}
function Mulher (){
    document.getElementById("Ladino").src="../img/Tipo Ladino/Mulher.jpeg";
}
function Elfo (){
    document.getElementById("Ladino").src="../img/Tipo Ladino/Elfo.jpeg";
}
function Elfa (){
    document.getElementById("Ladino").src="../img/Tipo Ladino/Elfa.jpeg";
}

function exito(){
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var raca = document.getElementById("raca");
    var alt = document.getElementById("alt");
    var sexo = document.getElementById("sexo");
    var peso = document.getElementById("pe");
    if(parseInt(idade.value) > 130 && raca.value == "H" || parseInt(alt.value) > 200){
        
        alert("Invalido");
    }
    else{
        alert("O Heroi "+nome.value+", com idade "+idade.value+
        ", sendo da Raça "+raca.value+", com altura de "+alt.value+
        ", sexo "+sexo.value+" e pesando "+peso.value);
    }

}