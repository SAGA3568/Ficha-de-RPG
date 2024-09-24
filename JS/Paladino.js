function Homem(){
    document.getElementById("Paladino").src="../img/Paladino/Paladino.jpeg";
}
function Mulher(){
    document.getElementById("Paladino").src="../img/Paladino/Paladina.jpeg";
}




function exito(){
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var raca = document.getElementById("raca");
    var alt = document.getElementById("alt");
    var sexo = document.getElementById("sexo");
    var peso = document.getElementById("pe");
    if(parseInt(idade.value) > 130 ){
        
        alert("Invalido");
    }
    else{
        alert("O Heroi "+nome.value+", com idade "+idade.value+
        ", sendo da Raça "+raca.value+", com altura de "+alt.value+
        ", sexo "+sexo.value+" e pesando "+peso.value);
    }
    
}