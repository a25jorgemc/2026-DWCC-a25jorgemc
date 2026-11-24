
const pBoton = document.querySelector("span");

function mostrarLista() {
    const elLista = document.querySelectorAll("li");
    for (const element of elLista) {
        element.classList.toggle("oculto");
    }
}
pBoton.addEventListener("click", mostrarLista)

