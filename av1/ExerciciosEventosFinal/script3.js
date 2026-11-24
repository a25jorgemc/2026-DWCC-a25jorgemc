// Utilizando un só manexador de eventos fai que ao pulsar sobre un nodo da
// árbore se mostren / oculten os nodos fillos.
const listaGrande = document.getElementById("tree");

function ocultarFillos(e) {
    const fillos = e.target.children;
    const fillosArray = Array.from(fillos);

    for (const element of fillosArray) {
        const span = document.createElement("span");

        if (element.style.display == "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

}

listaGrande.addEventListener("click", ocultarFillos);