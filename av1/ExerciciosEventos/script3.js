const button = document.querySelector("button");

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);

// Execútanse todos xa que o remove non coñece a dirección de memoria do primeiro aínda que sexa a misma funcion