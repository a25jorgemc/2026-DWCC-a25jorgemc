const titulo = document.getElementById("titulo");
const botonCambiar = document.getElementById("inicio");
const botonParar = document.getElementById("stop");

let intervalo;

function cambiarCor() {
    clearInterval(intervalo)

    intervalo = setInterval(() => {
        titulo.classList.toggle("azul");
    }, 1000)
}

function pararCambio() {
    clearInterval(intervalo)
}


botonCambiar.addEventListener("click", cambiarCor);
botonParar.addEventListener("click", pararCambio);
