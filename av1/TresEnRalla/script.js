const tabla = document.getElementById("tabla");
let turno = false;
let arrayFilas = tabla.rows;

function marcar(e) {
    if (e.target.tagName == "TD") {
        const tdPillado = e.target;
        if (!tdPillado.classList.contains("marcado")) {
            if (!turno) {
                tdPillado.textContent = "X";
                tdPillado.classList.add("marcado");
                turno = true;
                arrayFilas = tabla.rows;
            } else {
                tdPillado.textContent = "O";
                tdPillado.classList.add("marcado");
                turno = false;
                arrayFilas = tabla.rows;
            }

        }

    }
}


function init() {
    tabla.addEventListener("click", marcar);
}

init();