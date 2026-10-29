
const pBoton = document.querySelector("p");

function mostrarLista() {
    const elLista = document.querySelectorAll("li");
    for (const element of elLista) {
        element.classList.toggle("oculto");
    }
}
pBoton.addEventListener("click", mostrarLista)

