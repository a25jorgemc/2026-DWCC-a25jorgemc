// Crea unha función denominada reverseString á que se lle pase unha cadea e
// devolva unha nova cadea cos caracteres da orixinal en sentido inverso.

function reverseString(cadeaInicial) {
  let cadeaFinal = '';

  for (let index = cadeaInicial.length - 1; index >= 0; index--) {
    cadeaFinal += cadeaInicial.at(index);
  }
  return cadeaFinal;
}

console.log(reverseString('I am a string')); // gnirts a ma I
