const imaxe = document.querySelector("img");

imaxe.addEventListener("click", () => {
    console.log("Evento click realizado");
});

imaxe.addEventListener("dblclick", () => {
    console.log("Evento dblclick realizado");
});

imaxe.addEventListener("contextmenu", () => {
    console.log("Evento contextmenu realizado");
});

imaxe.addEventListener("mousedown", () => {
    console.log("Evento mousedown realizado");
});

imaxe.addEventListener("mouseup", () => {
    console.log("Evento mouseup realizado");
});

imaxe.addEventListener("wheel", () => {
    console.log("Evento wheel realizado");
});

imaxe.addEventListener("mouseover", () => {
    console.log("Evento mouseover realizado");
});

imaxe.addEventListener("mouseout", () => {
    console.log("Evento mouseout realizado");
});

imaxe.addEventListener("dragstart", () => {
    console.log("Evento dragstart realizado");
});

imaxe.addEventListener("drag", () => {
    console.log("Evento drag realizado");
});

imaxe.addEventListener("dragend", () => {
    console.log("Evento dragend realizado");
});
