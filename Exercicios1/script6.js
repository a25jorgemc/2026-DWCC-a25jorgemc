// Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)]2
// a. Almacena en variables o peso e altura de dúas persoas.
// b. Calcula o IMC das dúas persoas.
// c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da
// primeira persoa é maior que o da segunda persoa (22.5)!'

const peso1 = 120;
const peso2 = 70;

const altura1 = 1.52;
const altura2 = 1.82;

const altura1cadrado = altura1 ** 2;
const altura2cadrado = altura2 ** 2;

const IMC1 = peso1 / altura1cadrado;
const IMC2 = peso2 / altura2cadrado;

if (IMC1 > IMC2) {
  console.log(
    'O IMC ' +
      IMC1.toFixed(2) +
      ' da 1ª persoa é maior que o da segunda ' +
      IMC2.toFixed(2),
  );
} else {
  console.log(
    'O IMC ' +
      IMC2.toFixed(2) +
      ' da 2ª persoa é maior que o da primeira ' +
      IMC1.toFixed(2),
  );
}
