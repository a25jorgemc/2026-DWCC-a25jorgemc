const filtrar = document.getElementById("buscador");
const inputEngadir = document.getElementById("texto");
const ul = document.getElementById("ul");
const botonBorrarTodo = document.getElementById("borrarTodo");
const botonEngadir = document.getElementById("engadir");

function pasarLocalStorage() {
    let arrayLi = Array.from(document.querySelectorAll("li"));
    let arrayTexto = [];
    for (const element of arrayLi) {
        arrayTexto.push(element.firstChild.textContent)
    }
    let listaString = JSON.stringify(arrayTexto);
    localStorage.setItem("listaCompra", listaString);
}

function engadirLocalStorage() {
    let listaStorage = JSON.parse(localStorage.getItem("listaCompra"))

    for (const element of listaStorage) {
        const li = document.createElement("li");
        const botonX = document.createElement("button");
        const span = document.createElement("span");

        botonX.type = "button";
        botonX.append("x");

        span.append(element);
        li.append(span)
        li.append(botonX);
        ul.append(li);
    }
}

function engadirLista() {
    if (inputEngadir.value != "") {
        let existente = false;
        let arrayLi = Array.from(document.querySelectorAll("li"));

        for (const element of arrayLi) {
            if (inputEngadir.value == element.firstChild.textContent) {
                alert("Xa tes ese elemento na lista da compra");
                existente = true;
            }
        }

        if (!existente) {
            const li = document.createElement("li");
            const botonX = document.createElement("button");
            const span = document.createElement("span");

            botonX.type = "button";
            botonX.append("x");

            span.append(inputEngadir.value);
            li.append(span)
            li.append(botonX);
            ul.append(li);

            inputEngadir.value = "";
        }
        checkUI();
        pasarLocalStorage();
    }
}

function borrarElemento(e) {
    if (e.target.tagName == "BUTTON") {
        const confirmacion = confirm("Estás segurisimo de que queres borrar o elemento?");
        if (confirmacion) {
            const elemento = e.target.parentElement;
            elemento.remove();
        }
        checkUI();
        pasarLocalStorage();
    }
}

function eliminarTodo() {
    let arrayLi = Array.from(document.querySelectorAll("li"));
    for (const element of arrayLi) {
        element.remove();
    }
    checkUI();
    pasarLocalStorage();

}

function filtrarNome() {
    const arrayLi = Array.from(document.querySelectorAll("li"));
    for (const element of arrayLi) {
        let texto = element.firstChild.textContent.toLowerCase();

        if (!texto.startsWith(filtrar.value.toLowerCase())) {
            element.style.display = "none";
        } else {
            element.style.display = "list-item";
        }

    }
}
function editarConcreto() {
    const texto = document.querySelector(".colorear")
    texto.textContent = inputEngadir.value;
    texto.classList.toggle("colorear")
    botonEngadir.textContent = "+ Engadir elemento";
    inputEngadir.value = "";

    botonEngadir.removeEventListener("click", editarConcreto);
    botonEngadir.addEventListener("click", engadirLista);
    botonBorrarTodo.classList.remove("oculto");

}

function actualizarElemento(e) {
    if (e.target.tagName == "SPAN") {
        const subrayado = document.querySelector(".colorear");
        botonBorrarTodo.classList.add("oculto");
        if (subrayado) {
            subrayado.classList.toggle("colorear")
        }
        e.target.classList.toggle("colorear");

        inputEngadir.value = e.target.textContent;

        botonEngadir.textContent = "Actualizar";

        botonEngadir.removeEventListener("click", engadirLista);

        botonEngadir.addEventListener("click", editarConcreto)
        pasarLocalStorage();

    }
}
function checkUI() {
    let arrayLi = Array.from(document.querySelectorAll("li"));
    if (arrayLi.length == 0) {
        botonBorrarTodo.classList.add("oculto");
    } else {
        botonBorrarTodo.classList.remove("oculto");
    }
}

function init() {
    checkUI();
    inputEngadir.value = "";
    engadirLocalStorage();
    botonEngadir.addEventListener("click", engadirLista);
    ul.addEventListener("click", borrarElemento);
    botonBorrarTodo.addEventListener("click", eliminarTodo);
    filtrar.addEventListener("keyup", filtrarNome);
    ul.addEventListener("click", actualizarElemento);
}
init();