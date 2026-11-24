// Crea unha función á que se lle pase unha data e que devolva true se é fin de semana.
function isFinDeSemana(date) {
  return !!date.getDay() === 6 || date.getDay() === 0;
}
console.log(isFinDeSemana(2026, 6, 25));
