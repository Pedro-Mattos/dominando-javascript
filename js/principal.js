var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

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

}

if(altura<=0 || altura>=3){
    alturaEhValida = false;
    tdImc.textContent = "inválido";
}

if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;

}