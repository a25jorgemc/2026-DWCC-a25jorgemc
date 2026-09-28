// Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).
const num = 0;
let factorial = 1;
if (isNaN(num)) {
  console.log('Non introduciches un valor válido');
} else {
  for (let index = num; index > 0; index--) {
    factorial = factorial * index;
  }
  console.log('O factorial de ' + num + ' é ' + factorial);
}
