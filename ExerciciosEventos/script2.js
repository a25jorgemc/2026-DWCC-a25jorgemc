const boton = document.getElementById("boton");

function engadirLista() {
    const texto = document.getElementById("campo").value;
    const lista = document.getElementById("lista");
    const li = document.createElement("li")

    li.append(document.createTextNode(texto))
    lista.append(li);

}
boton.addEventListener("click", engadirLista)

