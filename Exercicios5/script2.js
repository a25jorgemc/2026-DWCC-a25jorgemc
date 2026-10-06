// Dado un array con nomes de variables formados por dúas palabras separadas por
// “_”, fai as operacións necesarias para mostrar por consola os nomes das variables
// en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
// last_NAME”], deberase mostrar por consola “firtsName” e “lastName”

const arraycillo = ["first_name", "last_NAME"];

let arrayNovo = [];

for (const element of arraycillo) {
  let [primeiro,segundo] = element.split("_");
  segundo = segundo.toLowerCase();
  segundo = segundo[0].toUpperCase()+segundo.slice(1);

  arrayNovo.push(primeiro+segundo)
}
console.log(arrayNovo);