// Establecer el punto inicial del mapa y el nivel de zoom
let map = L.map('map').setView([19.28511933538366, -99.67623429179442], 15)

//Integrando el mapa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Agregando la funcionabilidad JS para la selección de cada opción del menú desplegable
//Se hace a través del Id del objeto
//En nuestro caso, el id es select-campus

document.getElementById("select-campus").addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 16);
})