const link = document.getElementById("ligazon");

function mostrarSpan() {
    const span = document.getElementById("adicional");
    link.style.display = "none";
    span.classList.toggle("oculto");
}

link.addEventListener("click", mostrarSpan)