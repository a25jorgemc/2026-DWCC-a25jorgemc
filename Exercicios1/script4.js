// Escribe as potencias de 2, dende 2⁰ ata 2^20. Para cada potencia debe saír un texto
// similar a “2 elevado a 0 = 1”
let resultado = 0;
for (let index = 0; index <= 20; index++) {
  resultado = 2 ** index;
  console.log('2 elevado a ' + index + ' é ' + resultado);
}
