const boton = document.getElementById("boton");
const input = document.querySelector("input");
input.focus();

function engadirLista() {
    const texto = document.getElementById("campo").value;
    const lista = document.getElementById("lista");
    const li = document.createElement("li")

    if (texto != "") {
        li.append(document.createTextNode(texto))
        lista.append(li);
        input.value = "";
    }

}
boton.addEventListener("click", engadirLista)

