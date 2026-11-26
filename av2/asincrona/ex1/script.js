

function escribirNumeros(desde, ata) {
    const intervalo = setInterval(() => {
        console.log(desde);
        desde++;
        if (desde == ata + 1) {
            clearInterval(intervalo)
        }
    }, 1000)

}

escribirNumeros(5, 10)