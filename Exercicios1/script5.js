// Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1).
const num = 5;
let factorial = 1;

for (let index = num; index > 0; index--) {
  factorial = factorial * index;
}
console.log('O factorial de ' + num + ' é ' + factorial);
