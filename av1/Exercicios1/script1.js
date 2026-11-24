// Crea unha variable que almacene un día da semana de luns a domingo. En función
// do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.

const dia = 'Sábado';
if (dia == 'Sábado' || dia == 'Domingo') {
  console.log(dia + ' non é laborable');
} else {
  if (
    dia == 'Luns' ||
    dia == 'Martes' ||
    dia == 'Mércores' ||
    dia == 'Xoves' ||
    dia == 'Venres'
  ) {
    console.log(dia + ' é laborable');
  } else {
    console.log('Non introduciches un día válido');
  }
}
