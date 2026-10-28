'use strict';

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal" 
const titulo = document.getElementById("tituloPrincipal");
titulo.classList = "color-title";

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada
const ul = document.querySelector("ul");
const li = document.createElement("li");
const texto = document.createTextNode("Item 5");
li.append(texto);
li.classList = "item-lista";
ul.append(li);

// Modifica o ancho do div con id "contedor" a 800px usando JavaScript 
const divContedor = document.getElementById("contedor");
divContedor.style = "width:800px";

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..." 
const input1 = document.querySelector("input");
input1.placeholder = "Escribe aquí..."

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px
const listaId = document.getElementById("lista");
listaId.style.fontSize = "18px";

// Elimina o segundo elemento da lista (Item 2)
const segundoLi = document.querySelectorAll("li")[1];
segundoLi.remove();

// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe" 
const parrafo = document.createElement("p");
const texto2 = document.createTextNode("Texto dinámico");
const mensaxe = document.getElementById("mensaxe");
parrafo.append(texto2);
mensaxe.after(parrafo)



