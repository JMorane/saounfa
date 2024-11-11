import 'https://unpkg.com/leaflet';

import { MarkerManager } from './markers.js'

export function setItinerary(itinerary_id){
    switch (true) {
        case itinerary_id == 1:
            itineraryOne();
            break;
        case itinerary_id == 0:
            itineraryAnniversary();
            break;
        default:
            console.log("Invalid itinerary");
            break;
    }
}

function itineraryAnniversary(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.837140750828, 2.4044191991569206],
        title : "La Vega",
        mp3: "./assets/audio/vega.mp3"
    })

    markerManager.addMarker({
        latlng : [48.8365430514207, 2.3943123262137607], //[48.8671938,2.3959993],
        title : "Boulangerie",
        mp3: "./assets/audio/boulangerie.mp3"
    })

    markerManager.addMarker({
        latlng : [48.85493897028012, 2.354999734547234], //[48.8671938,2.3959993],
        title : "Chez Julien",
        mp3: "./assets/audio/resto.mp3"
    })

    markerManager.addMarker({
        latlng : [48.8702190271689, 2.3113786857293666], //[48.8671938,2.3959993],
        title : "Hotel",
        mp3: "./assets/audio/hotel.mp3"
    })
}

function itineraryOne(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.822252, 2.358653],
        title : "Naturenville",
        mp3: "./assets/audio/naturenville.mp3"
    })

    markerManager.addMarker({
        latlng : [48.824471, 2.357990],
        title : "Rue Auguste Perret",
        mp3: "./assets/audio/perret.mp3"
    })

    markerManager.addMarker({
        latlng : [48.828471, 2.359990], //[48.8671938,2.3959993],
        title : "Mathis",
        mp3: "./assets/audio/bel_air.mp3"
    })

    markerManager.addMarker({
        latlng : [48.86243,2.3850897],
        title : "Pere Lachaise",
        mp3: "./assets/audio/notre_dame.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.8653431,2.3915813],
        title : "Square du Docteur JAcques-Joseph-Grandier",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8706068,2.394018],
        title : "Square des Saint-Simoniens",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8716096,2.3926461],
        title : "Square Emmi-Pickler",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8705521,2.3909355],
        title : "Villa de l'Ermitage",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8700596,2.3915865],
        title : "pavillon Carré de Baudouin. ",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.8714766,2.3889373],
        title : "Regard Saint Martin",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })

    markerManager.addMarker({
        latlng : [48.9135076,2.1913571],
        title : "église Notre Dame de la Croix. ",
        mp3: "./assets/audio/tour_eiffel.mp3",
    })
}