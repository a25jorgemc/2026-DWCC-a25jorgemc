// Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.
function diasMes(numMes, numAno) {
  let bisiesto = false;
  let totalMes = 0;
  if (numAno % 4 == 0 && (numAno % 100 != 0 || numAno % 400 == 0)) {
    bisiesto = true;
  }

  if (
    numMes == 1 ||
    numMes == 3 ||
    numMes == 5 ||
    numMes == 7 ||
    numMes == 8 ||
    numMes == 10 ||
    numMes == 12
  ) {
    totalMes = 31;
  } else if (numMes == 2) {
    if (bisiesto) {
      totalMes = 29;
    } else {
      totalMes = 28;
    }
  } else {
    totalMes = 30;
  }
  return totalMes;
}
console.log(diasMes(2, 2024));
