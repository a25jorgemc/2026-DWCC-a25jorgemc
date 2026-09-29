// Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano
function diasPasados(ano, mes, dia) {
  let bisiesto = false;
  if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
    bisiesto = true;
  }

  let diasTotais = 0;
  diasTotais += dia;
  for (let index = 1; index < mes; index++) {
    if (
      index == 1 ||
      index == 3 ||
      index == 5 ||
      index == 7 ||
      index == 8 ||
      index == 10 ||
      index == 12
    ) {
      diasTotais += 31;
    } else if (index == 2) {
      if (bisiesto) {
        diasTotais += 29;
      } else {
        diasTotais += 28;
      }
    } else {
      diasTotais += 30;
    }
  }
  return diasTotais;
}

console.log(diasPasados(2024, 12, 31));
