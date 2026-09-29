// Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
// minúsculas

function cambiarFrase(frase) {
  frase = frase.toLowerCase();

  let arrayFrase = frase.split(' ');
  let novaCadea = '';
  let palabra = '';

  for (let index = 0; index < arrayFrase.length; index++) {
    palabra = arrayFrase[index];
    arrayFrase[index] = palabra.charAt(0).toUpperCase() + palabra.substring(1);
  }

  arrayFrase = arrayFrase.join(' ');
  return arrayFrase;
}

console.log(cambiarFrase('fubol clu xallas saNTa comba'));
