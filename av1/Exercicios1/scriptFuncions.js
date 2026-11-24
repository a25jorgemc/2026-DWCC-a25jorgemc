// Crea unha función que reciba como parámetro un prezo e unha porcentaxe de
// desconto. A función debe calcular o prezo final a pagar unha vez aplicado o
// desconto e devolver este valor. Mostra por consola os valores: prezo orixinal,
// desconto e prezo final
function prezoFinal(prezo, porcentaxeDesconto) {
  let prezoF = 0;
  prezoF = prezo - prezo * (porcentaxeDesconto / 100);
  console.log('Prezo inicial: ' + prezo);
  console.log('Porcentaxe de desconto: ' + porcentaxeDesconto);
  console.log('Prezo final: ' + prezoF);

  return prezoF;
}
prezoFinal(5, 10);
