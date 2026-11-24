const ligazons = document.getElementById("contents");

function confirmacion(e) {
    let elemento = e.target;

    while (elemento.tagName != "A" && elemento != ligazons) {
        elemento = elemento.parentElement;
    }
    if (elemento.tagName == "A") {
        const confirmacion = window.confirm("Queres ir ao enlace?");
        if (!confirmacion) {
            e.preventDefault();
        }
    }
}

ligazons.addEventListener("click", confirmacion);