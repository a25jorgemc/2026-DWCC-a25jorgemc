const boton = document.getElementById("botonSubmit");
const input = document.getElementById("texto");
const select = document.getElementById("selectEx");
const radioA = document.getElementById("a");
const radioB = document.getElementById("b");
const radioC = document.getElementById("c");
const checkboxEx = document.getElementById("box");


function mostrarValores() {
    console.log(`Valor do input:${input.value}`);
    console.log(`Valor do select:${select.value}`);

    if (radioA.checked) {
        console.log(`radioA está checkeado. Valor: ${radioA.value}`);
    } else if (radioB.checked) {
        console.log(`radioB está checkeado. Valor: ${radioB.value}`);
    } else if (radioC.checked) {
        console.log(`radioC está checkeado. Valor: ${radioC.value}`);
    }

    if (checkboxEx.checked) {
        console.log(`O checkbox está marcado. Senial`);
    } else {
        console.log(`O checkbox non está marcado. Senial igualmente`);
    }
}
boton.addEventListener("click", mostrarValores)