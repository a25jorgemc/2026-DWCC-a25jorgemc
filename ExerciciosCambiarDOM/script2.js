// Dada unha lista < ol > con varios elementos < li >, crea o código necesario para
// eliminar todos os < li > da lista
const elementosLista = document.querySelectorAll("li");
console.log(elementosLista);
for (const element of elementosLista) {
    element.remove();
}