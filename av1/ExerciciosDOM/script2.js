// O elemento con id “input2”.
console.log(document.getElementById("input2"));

// ● A colección de parágrafos
console.log(document.querySelectorAll("p"));

// ● Todos os parágrafos dentro do div con id “lipsum”.
const lipsumDiv = document.getElementById("lipsum");
console.log(lipsumDiv.querySelectorAll("p"));

// ● O formulario
console.log(document.querySelector("form"));

// ● Todos os inputs
console.log(document.querySelectorAll("input"));

// ● Só os inputs con nome “sexo”.
console.log(document.getElementsByName("sexo"));

// ● Os items da lista con clase “important”.
console.log(document.querySelectorAll("li.important"));