// A táboa con id = "age-table".
console.log(document.getElementById("age-table"));

// ● Todos os elementos label dentro da táboa(debería haber 3).
console.log(document.querySelectorAll("table label"))

// ● O primeiro td da táboa.
console.log(document.querySelectorAll("td")[1]);

// ● O formulario con name = "search".
console.log(document.getElementsByName("search")[0]);

// ● O primeiro input do formulario anterior.
const formulario = document.getElementsByName("search")[0];
console.log(formulario.querySelector("input"));

// ● O último input do formulario do apartado anterior.
console.log(document.querySelectorAll("input")[1]);