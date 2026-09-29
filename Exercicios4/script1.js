function indices(elemento, arrayInicial) {
  const novoArray = [];

  for (let index = 0; index < arrayInicial.length; index++) {
    if (arrayInicial[index] == elemento) {
      novoArray.push(index);
    }
  }
  return novoArray;
}

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]
