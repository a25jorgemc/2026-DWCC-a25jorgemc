// Crea unha función á que se lle pase unha data e que devolva true se é fin de semana.
function isFinDeSemana(ano, mes, dia) {
  let diaElegido = new Date(ano, mes, dia);
  let diaSemana = diaElegido.getDay();

  if (diaSemana == 6 || diaSemana == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isFinDeSemana(2026, 6, 25));
