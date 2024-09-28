import 'https://unpkg.com/leaflet';
import { Fallback } from './tileFallback.js';

const PARIS_LATLNG = [48.866667, 2.333333];
const ZOOM_LEVEL = 200; //10;
const RADIUS = 25; //700;
const MATHIS_ICON = L.icon({
    iconUrl: './assets/mathis_icon.png',
    iconSize: [50, 50], // Size of the icon
    // iconAnchor: [50, 25],
});

class CurrentPosition {
    // Current position of the user
    // Stores the marker + the circle around it
    constructor(icon, radius, color) {
        this.map = null;
        this.icon = icon;
        this.radius = radius;
        this.marker = null;
        this.circle = null;
        this.color = null;
        this.displayed = false;
    }

    setInitial(latlng) {
        if (this.displayed) {
            return
        }
        this.map = getMap();
        this.marker = new L.marker(latlng, { icon: this.icon })
        this.marker.addTo(this.map)
        this.circle = L.circle(latlng, this.radius);
        this.circle.setStyle({color: this.color})
        this.circle.addTo(this.map);
        this.displayed = true;
    }

    updateLocation(latlng) {
        this.marker.setLatLng(latlng);
        this.circle.setLatLng(latlng);
    }
}

let map;
let currentPos = new CurrentPosition(MATHIS_ICON, RADIUS, "blue");


export function getMap() {
    return map; // Export a function to get the map object
}

export function getCurrentPos() {
    return currentPos; // Export a function to get the map object
}

export function initializeMap() {
    // Create a map
    map = L.map('map')

    // Center it on Paris
    //map = map.setView(PARIS_LATLNG, ZOOM_LEVEL);

    // Center it on local position
    map.locate({setView: true});
    map.setZoom(100);

    // Add a tile layer to the map
    var default_tile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var tile = "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=3e5104ec-9859-4ec2-b391-1f9caf641112"

    var theTile = new Fallback(tile, {
        minZoom: 1,
        maxZoom: 16,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }, default_tile);

    theTile.addTo(map);
    // L.tileLayer(tile, {
    //     attribution: '© OpenStreetMap contributors'
    // }).addTo(map);
}

export function onLocationFound(e) {
    // e.accuracy is available for a potential circle diameter
    console.log("Location found");
    console.log(e.latlng);
    currentPos.setInitial(e.latlng)
}

// For debbuging: move current position where clicked
export function onLongPress(latlng) {

    // Handle the long press event here
    console.log('Long press at', latlng);
    
    // Move current position
    currentPos.updateLocation(latlng)
}

export function registerOnLongPress(){
    var longPressTimeout;
    var longPressDuration = 500; // in milliseconds
    
    map.on('mousedown', function (e) {
        console.log("PRESS");
        longPressTimeout = setTimeout(function () {
            onLongPress(e.latlng);
        }, longPressDuration);
    });
    
    map.on('mouseup', function () {
        clearTimeout(longPressTimeout);
    });
}
