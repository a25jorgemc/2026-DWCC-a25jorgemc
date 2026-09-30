const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722; scq93766109; 11:45 + _Delayed_Arrival; svq7439299980; scq93766109; 12:05 + _Departure; scq93766109; svq2323639855; 12:30";

const flights = flightsInfo.split('+');

for (const element of flights) {
  const [tipo, codigo1, codigo2, hora] = element.split(";");
  const tipoCambiado = tipo.replaceAll("_", " ");
  const codigo1Cambiado = codigo1.slice(0, 3).toUpperCase();
  const codigo2Cambiado = codigo2.slice(0, 3).toUpperCase();
  const tempoCambiado = hora.replaceAll(":", "h")

  const textoFinal = `${tipoCambiado} ${codigo1Cambiado} ${codigo2Cambiado} ${tempoCambiado}`;

  console.log(textoFinal);

}


