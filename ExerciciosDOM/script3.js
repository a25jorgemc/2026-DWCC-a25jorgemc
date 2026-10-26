// Utilizando as diferentes propiedades para recorrer o DOM vistas nos apartados
// anteriores indica, polo menos, unha forma de acceder aos seguintes nodos dende o
// elemento <body> (document.body):
// ● o nodo <div>
console.log(document.body.firstElementChild);

// ● o nodo <ul>
console.log(document.body.childNodes[3]);

// ● o segundo <li>
console.log(document.body.childNodes[3].childNodes[3]);

// 2. Dado un elemento calquera dunha árbore DOM:
// a. ¿É certo que elemento.lastChild.nextSibling é sempre null?
//Si, xa que non ten máis elementos á misma altura despois del mesmo se é o último.

// b. ¿É certo que elemento.children[0].previousSibling é sempre null?
//Non, xa que pode conter saltos de liña. 