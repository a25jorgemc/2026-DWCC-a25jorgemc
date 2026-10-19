// A táboa con id = "age-table".
console.log(document.getElementById("age-table"));

// ● Todos os elementos label dentro da táboa(debería haber 3).
console.log(document.querySelectorAll("table label"))

// ● O primeiro td da táboa.
const tabla = document.getElementById("age-table");
console.log(tabla.querySelector("td"));


// ● O formulario con name = "search".
console.log(document.getElementsByName("search"));

// ● O primeiro input do formulario anterior.
const formulario = document.getElementsByName("search");
console.log(formulario.querySelector("input"));

// ● O último input do formulario do apartado anterior.