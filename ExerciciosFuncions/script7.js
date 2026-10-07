function validarDNI(DNI) {
    const letrillas = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

    const dniSinLetra = DNI.slice(0, -1);
    const letraDni = DNI.slice(-1);
    const resto = dniSinLetra % 23;

    if (letraDni == letrillas[resto]) {
        return true;
    } else {
        return false
    }

}
console.log(validarDNI("46093301J"));
