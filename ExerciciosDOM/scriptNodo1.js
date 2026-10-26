// O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
const labels = document.querySelectorAll("form>label");
const labelSexo = labels[3];
console.log(labelSexo.innerHTML);
console.log(labelSexo.innerText);
console.log(labelSexo.textContent);

// ● O valor do primeiro input de sexo
console.log(labelSexo.querySelector("input"));

// ● O valor do sexo que estea seleccionado.
const nomeSexo = document.getElementsByName("sexo");

for (const element of nomeSexo) {
    if (element.checked) {
        console.log(element.value);
    }
}

// ● O texto de cada un dos elementos < li >
const lis = document.querySelectorAll("li");
for (const element of lis) {
    console.log(element.innerText);
}

// ● Indica cantos elementos < li > hai.
console.log("Elementos li: " + lis.length);

// ● Indica o valor do atributo data - widget - name
const divs = document.querySelectorAll("div");
const elemento = divs[1];
console.log(elemento.dataset.widgetName);


