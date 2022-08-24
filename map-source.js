var map = L.map('map', { crs: L.CRS.Simple, minZoom: -1})
var bounds = [[0,0], [1600,2032]];
var image = L.imageOverlay('is-map.png', bounds).addTo(map);
var sol = L.latLng([ 650, 1000 ]);
L.marker(sol).addTo(map);
var circle = L.circle([650, 1000], {
    color: 'blue',
    fillColor: 'lightblue',
    fillOpacity: 0.3,
    radius: 75
}).addTo(map);
map.fitBounds(bounds);