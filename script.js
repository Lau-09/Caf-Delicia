function cambiarColor(botonClicado) {
    var botones = document.querySelectorAll('.botones button');
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.color = 'gray';
    }
     botonClicado.style.color = 'white';
}

//function inicializarMapa() {
//    var ubicacion = { lat: -34.603722, lng: -58.381592 }; // Coordenadas de ejemplo (Buenos Aires, Argentina)
//    var mapa = new google.maps.Map(document.getElementById('mapa'), {
//        zoom: 15,
//        center: ubicacion
//    });
//    var marcador = new google.maps.Marker({
//        position: ubicacion,
//        map: mapa,
//        title: 'Ubicación'
//    });
//}
