const boton = document.querySelector("button");
const divTexto = document.getElementById("texto");
const inputTexto = document.getElementById("textoExercicio1");

function mouseDentro() {
    console.log("Mouse dentro");
}
function mouseFora() {
    console.log("Mouse fora");
}
function borrarTexto() {
    divTexto.style.display = "none";
}
function mostrarTodo(event) {
    divTexto.innerHTML = "Tecla pulsada: " + event.key + "<br> Código: " + event.code;
    divTexto.style.display = "block";
}
boton.addEventListener("mouseover", mouseDentro);
boton.addEventListener("mouseout", mouseFora);

boton.addEventListener("click", borrarTexto)

inputTexto.addEventListener("keydown", mostrarTodo);