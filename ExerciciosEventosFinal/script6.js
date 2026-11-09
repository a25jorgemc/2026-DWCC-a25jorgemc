const listaImaxes = document.querySelector("ul");
const grande = document.getElementById("largeImg");

function cambiarImg(e) {
    e.preventDefault();
    const imaxeGrande = e.target.parentElement.href;
    grande.src = imaxeGrande;
}

listaImaxes.addEventListener("click", cambiarImg);
