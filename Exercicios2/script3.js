// Crea unha función denominada enmascarar á que se lle pase unha cadea de
// números e devolva unha cadea da mesma lonxitude que a pasada como parámetro
// pero formada formada por * e as últimas 4 cifras do parámetro de entrada.

function enmascarar(cadeaInicial) {
  let cadeaFinal = '';
  const ultimos4 = cadeaInicial.slice(-4);
  cadeaFinal = ultimos4.padStart(cadeaInicial.length, '*');
  return cadeaFinal;
}

console.log(enmascarar('1234123412347777')); // ************7777
