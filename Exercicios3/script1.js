// Mostra o día da semana (en letra) do 25 de xullo do ano actual.

const dia = new Date(2026, 6, 25);
const diaSemana = dia.getDay();
let cadeaFinal = '';

switch (diaSemana) {
  case 0:
    cadeaFinal = 'Domingo';
    break;
  case 1:
    cadeaFinal = 'Luns';
    break;
  case 2:
    cadeaFinal = 'Martes';
    break;
  case 3:
    cadeaFinal = 'Mércores';
    break;
  case 4:
    cadeaFinal = 'Xoves';
    break;
  case 5:
    cadeaFinal = 'Venres';
    break;
  case 6:
    cadeaFinal = 'Sábado';
    break;
  default:
    cadeaFinal = 'Non é un valor válido';
    break;
}

console.log(cadeaFinal);
