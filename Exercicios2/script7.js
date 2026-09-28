// Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.

function areaCirculo(radio) {
  return (Math.PI * radio ** 2).toFixed(2);
}
function perimetroCirculo(radio) {
  return (Math.PI * radio * 2).toFixed(2);
}

console.log(areaCirculo(5));
console.log(perimetroCirculo(5));
