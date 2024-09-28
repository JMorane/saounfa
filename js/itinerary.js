import 'https://unpkg.com/leaflet';

import { MarkerManager } from './markers.js'

function itineraryOne(){
    var markerManager = new MarkerManager({add_markers_at_init:false});

    markerManager.addMarker({
        latlng : [48.822252, 2.358653],
        title : "Naturenville",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/bel_air.mp3"
    })

    markerManager.addMarker({
        latlng : [48.824471, 2.357990],
        title : "Rue Auguste Perret",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/notre_dame.mp3"
    })

    markerManager.addMarker({
        latlng : [48.8671938,2.3959993],
        title : "Mathis",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/bel_air.mp3"
    })

    markerManager.addMarker({
        latlng : [48.86243,2.3850897],
        title : "Pere Lachaise",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/notre_dame.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.8653431,2.3915813],
        title : "Square du Docteur JAcques-Joseph-Grandier",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8706068,2.394018],
        title : "Square des Saint-Simoniens",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8716096,2.3926461],
        title : "Square Emmi-Pickler",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8705521,2.3909355],
        title : "Villa de l'Ermitage",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8700596,2.3915865],
        title : "pavillon Carré de Baudouin. ",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8714766,2.3889373],
        title : "Regard Saint Martin",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.9135076,2.1913571],
        title : "église Notre Dame de la Croix. ",
        color : "lightgray",
        marker_type : "inactive",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })
}

export {itineraryOne}