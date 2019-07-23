var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(i =0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");



    pesoEhValido = true;
    alturaEhValida = true;

    if(peso<=10 || peso>=300){
        pesoEhValido = false;
        tdImc.textContent = "inválido";
        paciente.classList.add("paciente-invalido");

    }

    if(altura<=0 || altura>=3){
        alturaEhValida = false;
        tdImc.textContent = "inválido";
        paciente.classList.add("paciente-invalido");

    }

    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);

    }


}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("botao Adicionar");
})