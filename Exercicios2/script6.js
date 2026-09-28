// Crea unha función á que se lle pase como parámetro o número de minutos e
// devolva un string indicando a súa equivalencia en horas e minutos
function minutosHoras(numMinutos) {
  let numHoras = 0;

  while (numMinutos >= 60) {
    numHoras++;
    numMinutos -= 60;
  }

  let cadeaFinal = `${numHoras} horas e ${numMinutos} minutos`;
  return cadeaFinal;
}

console.log(minutosHoras(500));
