// 1. Números aleatorios:
// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).

// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).

// c. Crea unha función que devolva un número enteiro aleatorio entre os dous
// valores pasados como parámetros. Así, por exemplo, a seguinte instrución
// debe mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10));

const ceroCatro = Math.random() * 4;

const ceroTres = Math.floor(ceroCatro);

const unTres = Math.floor(Math.random() * 3 + 1);

console.log(`Número aleatorio entre 0 e 3 (incluídos): ${ceroTres}`);

console.log(`Número aleatorio entre 1 e 3 (incluídos): ${unTres}`);

function numeroAleatorio(num1, num2) {
  const randomComprendido = Math.floor(
    Math.random() * (num2 + 1 - num1) + num1,
  );
  return randomComprendido;
}
console.log(`Función de aleatorios: ${numeroAleatorio(5, 10)}`);
