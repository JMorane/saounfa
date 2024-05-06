// file2.js
import 'https://unpkg.com/leaflet';
import { initializeMap, onLocationFound, getMap, registerOnLongPress } from './map.js';
import { itineraryOne } from './itinerary.js';
import "./numbered_markers.js"

// Setup and display the map
initializeMap();

var map = getMap(); 

// Add position and circle
map.on('locationfound', onLocationFound); 

function onLocationError(e) {
    alert(e.message);
}

function testFunc(e) {
    var myDiv = document.getElementById("myDiv");

    // Change its content
    myDiv.innerHTML = e.coords.latitude.toString() + " - " + e.coords.longitude.toString();
}

map.on('locationerror', onLocationError);

// Add nearby markers activation

// Add option to move current position on long press
registerOnLongPress()

// Add first itinerary markers
itineraryOne();

// Watch position
navigator.geolocation.watchPosition(testFunc, onLocationError, {
    maximumAge: 1000,
    timeout: 2000
  });
  