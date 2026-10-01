// Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.
function diasMes(numMes, numAno) {
  return new Date(numAno, numMes, 0).getDate();
}
let ano = 2024;

console.log(diasMes(1, 2024));
