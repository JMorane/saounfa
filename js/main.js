// file2.js
import 'https://unpkg.com/leaflet';
import { itineraryOne } from './itinerary.js';
import "./numbered_markers.js"
import { Fallback } from './tileFallback.js';

const PARIS_LATLNG = [48.866667, 2.333333];
const ZOOM_LEVEL = 200; //10;
const RADIUS = 25; //700;
const MATHIS_ICON = L.icon({
    iconUrl: './assets/mathis_icon.png',
    iconSize: [50, 50], // Size of the icon
    // iconAnchor: [50, 25],
});
const default_tile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tile = "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=3e5104ec-9859-4ec2-b391-1f9caf641112"


class CurrentPosition {
    // Current position of the user
    // Stores the marker + the circle around it
    constructor(map, icon, radius, color) {
        this.map = map;
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
map = L.map('map')
map.locate({setView: true});
map.setZoom(100);

export function getMap() {
    return map; // Export a function to get the map object
}

let currentPos = new CurrentPosition(map, MATHIS_ICON, RADIUS, "blue");

export function getCurrentPos() {
    return currentPos; // Export a function to get the map object
}

var theTile = new Fallback(tile, {
    minZoom: 1,
    maxZoom: 16,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}, default_tile);

theTile.addTo(map);

// Add position and circle
map.on('locationfound', onLocationFound); 

function onLocationFound(e) {
    // e.accuracy is available for a potential circle diameter
    console.log("Location found");
    console.log(e.latlng);
    currentPos.setInitial(e.latlng)
    map.on('move', () => {
        currentPos.updateLocation(map.getCenter());
    });
}

// For debbuging: move current position where clicked
function onLongPress(latlng) {

    // Handle the long press event here
    console.log('Long press at', latlng);
    
    // Move current position
    currentPos.updateLocation(latlng)
}



function registerOnLongPress(){
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


function onLocationError(e) {
    // alert(e.message);
    return
}

function testFunc(e) {
    var myDiv = document.getElementById("myDiv");

    // Change its content
    // myDiv.innerHTML = e.coords.latitude.toString() + " - " + e.coords.longitude.toString();
    console.log("change");
    var latlngStruct = {lat:e.coords.latitude, lng: e.coords.longitude};
    //var latlngStruct = {lat:(1+0.001*Math.random())*e.coords.latitude, lng: (1+0.001*Math.random())*e.coords.longitude};
    const dateTime = new Date().toLocaleString()
    myDiv.innerHTML = dateTime + " - " + latlngStruct.lat.toString() + " - " + latlngStruct.lng.toString();


    //map.locate({setView: true});
    map.panTo([latlngStruct.lat, latlngStruct.lng], {animate:true, duration:1});
    //onLongPress(latlngStruct);
    //map.setZoom((1+0.1*Math.random())*110);
}

map.on('locationerror', onLocationError);

// Add nearby markers activation

// Add option to move current position on long press
registerOnLongPress()

// Add first itinerary markers
itineraryOne();

// Watch position
// navigator.geolocation.watchPosition(testFunc, onLocationError, {
//     maximumAge: 1000,
//     timeout: 2000
//   });
  
function getCurrentPosition() {
    console.log("getting");
    navigator.geolocation.getCurrentPosition(
        (position) => {
            testFunc(position); 
            const { latitude, longitude } = position.coords;
            // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
            console.error("Error getting location: ", error.message);
        }
    );
}

// Get the position every second
setInterval(getCurrentPosition, 1000);