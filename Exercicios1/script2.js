// Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior
// dos 3 números

const num1 = 5;
const num2 = 3;
const num3 = 8;

if (num1 > num2 && num1 > num3) {
  console.log('O maior é ' + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log('O maior é ' + num2);
} else {
  console.log('O maior é ' + num3);
}
