//Establecer el punto inicial de nuestro mapa y el nivel del zoom
let map= L.map('map').setView([19.285042107916205, -99.67628685456107], 15);

//Integrando mapa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Agregando la funcionalidad js para la seccion de cada opcion
//Se have a traves de Id del objeto
//Se hace nuestro caso, el id es select-campus

document.getElementById("select-campus").addEventListener('change',
function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,16);
})