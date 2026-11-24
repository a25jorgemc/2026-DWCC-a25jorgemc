import {
    LeafletMap,
    TileLayer,
    Marker,
    CircleMarker,
    Control,
    DomUtil,
    Popup,
    Circle,
    Polyline,
    Polygon,
} from 'leaflet';

const map = new LeafletMap('map');
const inputTexto = document.getElementById("punto");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(
        function (posicion) {
            console.log(posicion);
            // desestruturación de obxectos
            const { latitude, longitude } = posicion.coords;
            map.setView([latitude, longitude], 17)
            console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
        },
        function (error) {
            console.log(`ERROR(${error.code}): ${error.message}`);
        }
    );
} else {
    /* geolocation IS NOT available */
}

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let arrayPuntos = [];
let lat;
let lng;

function onMapClick(e) {
    lat = e.latlng.lat;
    lng = e.latlng.lng;

    inputTexto.value = "";
    formulario.classList.remove("oculto");
    inputTexto.focus();
}

function engadirPunto(e) {
    e.preventDefault();

    if (inputTexto.value.trim() !== "") {

        let obxectoCoord = {
            nome: inputTexto.value.trim(),
            lat: lat,
            lng: lng
        };

        arrayPuntos.push(obxectoCoord);

        let marker = new Marker([lat, lng]).addTo(map);
        marker.bindPopup(obxectoCoord.nome);

        formulario.classList.add("oculto");
        inputTexto.value = "";

        const spanEngadir = document.createElement("span");
        spanEngadir.append(obxectoCoord.nome);

        const botonBorrar = document.createElement("button");
        botonBorrar.type = 'button';
        botonBorrar.append("X");

        const liEngadir = document.createElement("li");

        liEngadir.append(spanEngadir);
        liEngadir.append(botonBorrar);
        lista.append(liEngadir);

    }
}

function centrarPopupEliminar(e) {
    if (e.target.tagName == "SPAN") {
        for (const element of arrayPuntos) {
            if (element.nome == e.target.textContent) {
                map.setView([element.lat, element.lng], 17)
            }
        }
    }
    if (e.target.tagName == "BUTTON") {
        e.target.parentElement.remove();
    }

}

map.on('click', onMapClick);
formulario.addEventListener("submit", engadirPunto);
lista.addEventListener("click", centrarPopupEliminar)