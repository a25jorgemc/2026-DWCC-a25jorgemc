// O número de ligazóns da páxina.
const anchors = document.querySelectorAll("a");
console.log(anchors.length);

// ● A dirección da penúltima ligazón.
const penultima = anchors[5];
console.log(penultima.href);

// ● O número de ligazóns que apuntan a http://proba/
let contador = 0;
for (const element of anchors) {
    if (element.href == "http://proba/") {
        contador++;
    }
}
console.log("A http:proba/ apuntan " + contador + " ligazóns");

// ● O número de ligazóns do terceiro parágrafo.
const paragrafos = document.querySelectorAll("p");
const terceiro = paragrafos[2];

const ligazonsTerceiro = terceiro.querySelectorAll("a");
console.log("Número de ligazóns no terceiro parágrafo: " + ligazonsTerceiro.length);

// ● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa.

for (const element of anchors) {
    if (element.href == "http://proba/") {
        element.style.color = "orange";
    }
}
