// Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela.Debe usarse o
// número mínimo de billetes e moedas.


function billetesMonedas(cantidade) {
    if (cantidade <= 0) {
        console.log("Introduce unha cantidade válida");
    } else {
        const recursos = [500, 200, 100, 50, 20, 10, 5, 2, 1];

        for (const cartos of recursos) {
            let numero = 0;
            while (cantidade >= cartos) {
                cantidade -= cartos;
                numero++;
            }
            if (numero > 0) {
                if (cartos >= 5) {
                    console.log(`${numero} billetes de ${cartos} euros `);
                } else {
                    console.log(`${numero} monedas de ${cartos} euros `);
                }

            }
        }
    }
}

billetesMonedas(1000);