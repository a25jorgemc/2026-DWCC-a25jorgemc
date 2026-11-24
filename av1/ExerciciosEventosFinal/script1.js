'use strict';

// Engade un event listener ao botÃ³n con id "btnAccion" que mostre un alert ao facer click
const botonAccion = document.getElementById("btnAccion");

function mandarAlerta() {
    window.alert("hola");
}

botonAccion.addEventListener("click", mandarAlerta);

// Cada vez que se fai click no botÃ³n "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".

const divMensaxe = document.getElementById("mensaxe");
const botonClase = document.getElementById("btnAlternar");

function quitaPonClase() {
    divMensaxe.classList.toggle("resaltado");
}

botonClase.addEventListener("click", quitaPonClase);

// Mostra por consola o valor do input cando se pulse o botÃ³n "Enviar" do formulario. A continuaciÃ³n elimina o texto introducido no input

const botonEnviar = document.querySelector("button[type='submit']");
const input = document.querySelector("input");

function borrarFormulario(e) {
    e.preventDefault();
    console.log(input.value);
    input.value = "";
}

botonEnviar.addEventListener("click", borrarFormulario)