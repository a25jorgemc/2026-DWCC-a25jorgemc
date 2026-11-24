const tabla = document.querySelector("tbody");
const todosTr = document.querySelectorAll("tbody tr");
const arrayTabla = Array.from(todosTr);

function compararNomes(a, b) {
    const nomeA = a.children[0].innerText;
    const nomeB = b.children[0].innerText;

    if (nomeA > nomeB) {
        return 1;
    } else if (nomeA < nomeB) {
        return -1;
    }
    return 0;


}
arrayTabla.sort(compararNomes);

for (const element of arrayTabla) {
    tabla.append(element);
}