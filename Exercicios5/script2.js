// Dado un array con nomes de variables formados por dúas palabras separadas por
// “_”, fai as operacións necesarias para mostrar por consola os nomes das variables
// en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
// last_NAME”], deberase mostrar por consola “firtsName” e “lastName”

const arraycillo = ["first_name", "last_NAME"];

let arrayNovo = [];

for (const element of arraycillo) {
  let novoElemento = element.split("_");
  arrayNovo.push(novoElemento);
}

for (let index = 0; index < arrayNovo.length; index++) {
  arrayNovo[index][1] = arrayNovo[index][1].toLowerCase();

  arrayNovo[index][1] = arrayNovo[index][1][0].toUpperCase() + arrayNovo[index][1].slice(1);

  arrayNovo[index] = arrayNovo[index].join("");

}

console.log(arrayNovo);