// file2.js
import 'https://unpkg.com/leaflet';
import { initializeMap, onLocationFound, getMap, registerOnLongPress, onLongPress} from './map.js';
import { itineraryOne } from './itinerary.js';
import "./numbered_markers.js"

// Setup and display the map
initializeMap();

var map = getMap(); 

// Add position and circle
map.on('locationfound', onLocationFound); 

function onLocationError(e) {
    // alert(e.message);
    return
}

function testFunc(e) {
    var myDiv = document.getElementById("myDiv");

    // Change its content
    // myDiv.innerHTML = e.coords.latitude.toString() + " - " + e.coords.longitude.toString();

    var latlngStruct = {lat:e.coords.latitude, lng: e.coords.longitude};
    //var latlngStruct = {lat:(1+0.001*Math.random())*e.coords.latitude, lng: (1+0.001*Math.random())*e.coords.longitude};
    myDiv.innerHTML = myDiv.innerHTML = latlngStruct.lat.toString() + " - " + latlngStruct.lng.toString();


    //map.locate({setView: true});
    map.panTo([latlngStruct.lat, latlngStruct.lng], {animate:true});
    onLongPress(latlngStruct);
    //map.setZoom((1+0.1*Math.random())*110);
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
  