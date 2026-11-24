const inicioXornada = "07:30";
const finalXornada = "17:45";


const horaInicio = Number.parseInt(inicioXornada.slice(0, 2));
const minutoInicio = Number.parseInt(inicioXornada.slice(3, 5));

const horaFinal = Number.parseInt(finalXornada.slice(0, 2));
const minutoFinal = Number.parseInt(finalXornada.slice(3, 5));

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
    const [horaReunion, minutosInicioReunion] = horaInicioReunion.split(":");

    let horaInicioReunionInt = Number.parseInt(horaReunion);
    let minutoInicioReunionInt = Number.parseInt(minutosInicioReunion);

    if (duracionEnMinutos + minutoInicioReunionInt >= 60) {
        horaInicioReunionInt += Math.floor(duracionEnMinutos / 60);
        minutoInicioReunionInt += duracionEnMinutos % 60;
    }

    if (horaInicioReunionInt < horaInicio ||
        horaInicioReunionInt > horaFinal ||
        (horaInicioReunionInt == horaInicio && minutoInicioReunionInt < minutoInicio) ||
        (horaInicioReunionInt == horaFinal && minutoInicioReunionInt > minutoFinal)) {
        return false;
    }
    return true;


}

// Comprobacións
console.assert(axendarReunion("7:00", 15) == false,
    'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(axendarReunion("7:15", 30) == false,
    'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(axendarReunion("7:30", 30) == true,
    'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(axendarReunion("11:30", 60) == true,
    'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(axendarReunion("17:00", 45) == true,
    'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(axendarReunion("17:30", 30) == false,
    'Fallo comprobando axendarReunion("17:30", 30) == false'
);