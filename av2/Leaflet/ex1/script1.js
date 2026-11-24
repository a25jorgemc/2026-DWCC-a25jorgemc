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

/**
Crea unha páxina web que visualice un mapa centrado en base á xeolocalización da persoa usuaria.
Configura o mapa para que ao pulsar nun punto, se engada un marcador con un popup que informe sobre o posicionamento (latitude, lonxitude). 
Cada vez que se pulse nun novo punto do mapa, o marcador aparecerá posicionado na nova
localización pulsada informando sobre as coordenadas actuais.
Fai que as coordenadas aparezan con 6 cifras decimais
 */
let popup = new Popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
            'You clicked the map at -<br>' +
            '<b>lon:</b> ' +
            e.latlng.lng.toFixed(6) +
            '<br>' +
            '<b>lat:</b> ' +
            e.latlng.lat.toFixed(6)
        )
        .openOn(map);
    let marker = new Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup(popup);
}
map.on('click', onMapClick);