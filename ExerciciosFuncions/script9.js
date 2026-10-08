function buscarPatron(texto, patron) {
    texto = texto.toLowerCase();
    const arrayTexto = texto.split("");

    patron = patron.toLowerCase();
    const arrayPatron = patron.split("");

    let vecesPatron = 0;
    let contadorPatron = arrayPatron.length;

    for (let i = 0; i < arrayTexto.length; i++) {
        const letraTexto = arrayTexto[i];

        for (let j = 0; j < arrayPatron.length; j++) {
            const letraPatron = arrayPatron[j];

            if (letraPatron==arrayTexto[i+j]) {
                contadorPatron--;
            }
            if(contadorPatron==0){
                vecesPatron++;
            }

        }
        contadorPatron = arrayPatron.length;

    }

    return vecesPatron;
}
console.log(buscarPatron("AA10CCAAA", "aa"));
console.log(buscarPatron("AC10CCACA", "ac"));
console.log(buscarPatron("000111101000ABCHA", "00"));
