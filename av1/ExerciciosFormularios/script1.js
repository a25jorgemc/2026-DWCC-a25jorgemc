const caixaTexto = document.getElementById("cor");

function cambiarCorFocus(e) {
    e.target.style.backgroundColor = "yellow";
}
function cambiarCorOut(e) {
    e.target.style.backgroundColor = "white";
    if (e.target.value == "") {
        console.log("Está baleira e perdiu o foco. Que mágoa.");
    }
}
caixaTexto.addEventListener("focus", cambiarCorFocus)
caixaTexto.addEventListener("focusout", cambiarCorOut)