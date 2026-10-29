function crearCalendario(elemento, ano, mes) {
    const mesAno = new Date(ano, mes - 1, 1);

    const dataMes = new Date(ano, mes, 0);
    const diasMes = dataMes.getDate(dataMes)

    const tabla = document.createElement("table");
    elemento.append(tabla);

    const trDias = document.createElement("tr");
    tabla.append(trDias);

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const th6 = document.createElement("th");
    const th7 = document.createElement("th");

    th1.append("L")
    th2.append("M")
    th3.append("Me")
    th4.append("X")
    th5.append("V")
    th6.append("S")
    th7.append("D")

    trDias.append(th1);
    trDias.append(th2);
    trDias.append(th3);
    trDias.append(th4);
    trDias.append(th5);
    trDias.append(th6);
    trDias.append(th7);

    let tr2 = document.createElement("tr");
    tabla.append(tr2)

    for (let index = 1; index <= diasMes; index++) {
        if (mesAno.getDay() == 1) {
            tr2 = document.createElement("tr");
            tabla.append(tr2);
        }
        const td = document.createElement("td");
        td.append(index)
        tr2.append(td);
        tabla.append(tr2)

        mesAno.setDate(index)
    }
}

const calendario = document.querySelector("div");

crearCalendario(calendario, 2026, 11);