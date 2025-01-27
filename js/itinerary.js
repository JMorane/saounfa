import 'https://unpkg.com/leaflet';

import { MarkerManager } from './markers.js'

export function setItinerary(itinerary_id){
    switch (true) {
        case itinerary_id == "test":
            return itineraryTest();
            break;
        case itinerary_id == 0:
            return itineraryAnniversary();
            break;
        case itinerary_id == 1:
            return itineraryRoyale();
            break;
         case itinerary_id == 2:
            return itineraryRoyal2();
            break;
            case itinerary_id == 3:
            return itineraryVBV();
            break;
        case itinerary_id == -1:
            localStorage.clear();
            alert("Hstorique nettoyé !")
        default:
            console.log("Invalid itinerary");
            break;
    }
}

function itineraryVBV(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:true});

    markerManager.addMarker({
        latlng : [48.866044, 2.394667],
        title : "Chez Mathis",
        mp3: "./assets/audio/VBV/VBV_1_ElevenLabs_Chapter_1.mp3"
    })

    markerManager.addMarker({
        latlng : [48.835431, 2.406879],
        title : "Porte Dorée",
        mp3: "./assets/audio/VBV/VBV_2_Porte_dorée.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.832959, 2.409957],
        title : "Vendeur de barques",
        mp3: "./assets/audio/VBV/VBV_3_ElevenLabs_Lac_Dausmenil.mp3"
    })

    markerManager.addMarker({
        latlng : [48.832959, 2.409957],
        title : "Ile de Reuilly",
        mp3: "./assets/audio/VBV/VBV_4_ElevenLabs_Ile_de_reuilly.mp3"
    })

     markerManager.addMarker({
        latlng : [48.828835, 2.416364],
        title : "Grande Pagode",
        mp3: "./assets/audio/VBV/VBV_5_ElevenLabs_GrandePagode.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.828027, 2.418747],
        title : "Entrée dans le Bois",
        mp3: "./assets/audio/VBV/VBV_6_ElevenLabs_Fin_du_Lac_Dausmelin (1).mp3"
    })

    markerManager.addMarker({
        latlng : [48.822269, 2.442096],
        title : "Fontaine",
        mp3: "./assets/audio/VBV/VBV_7_ElevenLabs_Fontaine.mp3"
    })

    markerManager.addMarker({
        latlng : [48.819614, 2.447448],
        title : "Lac de gravelle",
        mp3: "./assets/audio/VBV/VBV_8_ElevenLabs_Lac_De_Gravelle.mp3"
    })

    markerManager.addMarker({
        latlng : [48.820710, 2.453632],
        title : "Arboretum",
        mp3: "./assets/audio/VBV/VBV_9_ElevenLabs_Arboretum.mp3"
    })

    markerManager.addMarker({
        latlng : [48.822437, 2.458991],
        title : "Ecole du Breuil",
        mp3: "./assets/audio/VBV/VBV_10_ElevenLabs_Eole_du_Breuil.mp3"
    })

     markerManager.addMarker({
        latlng : [48.827429, 2.464078],
        title : "Eau - rivière Joinville",
        mp3: "./assets/audio/VBV/VBV_11_ElevenLabs_Rivière_Joinville.mp3"
    })

    markerManager.addMarker({
        latlng : [48.833839, 2.464898],
        title : "jardin d'agronomie tropicale",
        mp3: "./assets/audio/VBV/VBV_12_ElevenLabs_Jardin_tropical.mp3"
    })

    markerManager.addMarker({
        latlng : [48.834713, 2.467194],
        title : "Pavillon de la Cochinchine",
        mp3: "./assets/audio/VBV/VBV_13_ElevenLabs_Pavillon_Cochinchine.mp3"
    })

    markerManager.addMarker({
        latlng : [48.835601, 2.467991],
        title : "Sortie du JAT",
        mp3: "./assets/audio/VBV/VBV_14_ElevenLabs_Sortie_Jardin.mp3"
    })

    markerManager.addMarker({
        latlng : [48.834137, 2.461462],
        title : "Lac des Minimes",
        mp3: "./assets/audio/VBV/VBV_15_ElevenLabs_Lac_des_minimes.mp3"
    })

    markerManager.addMarker({
        latlng : [48.835979, 2.454238],
        title : "Route du Champs de Manoeuvres - Cartoucherie",
        mp3: "./assets/audio/VBV/VBV_16_ElevenLabs_route_des_maneouvres.mp3"
    })

    markerManager.addMarker({
        latlng : [48.835979, 2.454238],
        title : "Obélisque",
        mp3: "./assets/audio/VBV/VBV_17_ElevenLabs_Obélisque.mp3"
    })

    markerManager.addMarker({
        latlng : [48.835280, 2.437811],
        title : "Vers le Chateau",
        mp3: "./assets/audio/VBV/VBV_18_ElevenLabs_Vers_le_chateau.mp3"
    })

    markerManager.addMarker({
        latlng : [48.839556, 2.436016],
        title : "Fin de la ballade",
        mp3: "./assets/audio/VBV/VBV_19_ElevenLabs_Fin_du_tour..mp3"
    })

    


    

    
    return markerManager
}

function itineraryRoyal2(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.861149, 2.335088],
        title : "Départ",
        mp3: "./assets/audio/PVR2/0PVR2.mp3"
    })

     markerManager.addMarker({
        latlng : [48.861620, 2.332978],
        title : "Arc de triomphe du Caroussel",
        mp3: "./assets/audio/PVR2/1PVR2.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.865304, 2.337936],
        title : "Jardins du Palais Royal",
        mp3: "./assets/audio/PVR2/2PVR2.mp3"
    })

    markerManager.addMarker({
        latlng : [48.865800, 2.341032],
        title : "Place des Victoires",
        mp3: "./assets/audio/PVR2/3PVR2.mp3"
    })

     markerManager.addMarker({
        latlng : [48.864212, 2.348017],
        title : "Tour Jean Sans Peur",
        mp3: "./assets/audio/PVR2/4PVR2.mp3"
    })

    markerManager.addMarker({
        latlng : [48.863225, 2.344324],
        title : "Eglise Saint Eustache",
        mp3: "./assets/audio/PVR2/5PVR2.mp3"
    })
}



function itineraryRoyale(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.866044, 2.394667],
        title : "Chez Mathis",
        mp3: "./assets/audio/royale/0.mp3"
    })
    markerManager.addMarker({
        latlng : [48.849280, 2.337344],
        title : "Palais du Luxembourg",
        mp3: "./assets/audio/royale/1.mp3"
    })
    markerManager.addMarker({
        latlng : [48.847218, 2.337254],
        title : "Grand Bassin du Luxembourg",
        mp3: "./assets/audio/royale/2.mp3"
    })
    markerManager.addMarker({
        latlng : [48.847044, 2.336122],
        title : "Statue de Marguerite de Provence",
        mp3: "./assets/audio/royale/3.mp3"
    })
     markerManager.addMarker({
        latlng : [48.848007, 2.339210],
        title : "Fontaine Médicis",
        mp3: "./assets/audio/royale/4.mp3"
    })
    markerManager.addMarker({
        latlng : [48.853736, 2.347578],
        title : "Notre-Dame",
        mp3: "./assets/audio/royale/5.mp3"
    })
    markerManager.addMarker({
        latlng : [48.855413, 2.345922],
        title : "Palais de la Cité",
        mp3: "./assets/audio/royale/6.mp3"
    })
    markerManager.addMarker({
        latlng : [48.856501, 2.342622],
        title : "Place Dauphine",
        mp3: "./assets/audio/royale/7.mp3"
    })
    markerManager.addMarker({
        latlng : [48.860014, 2.340168],
        title : "Colonnade du Louvre",
        mp3: "./assets/audio/royale/8.mp3"
    })
    markerManager.addMarker({
        latlng : [48.861410, 2.339930],
        title : "Rue Oratoire",
        mp3: "./assets/audio/royale/9.mp3"
    })
     markerManager.addMarker({
        latlng : [48.860940, 2.334912],
        title : "Statue de Louis XIV",
        mp3: "./assets/audio/royale/10.mp3"
    })
    return markerManager
}

function itineraryAnniversary(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.837140750828, 2.4044191991569206],
        title : "La Vega",
        mp3: "./assets/audio/anniversary/vega.mp3"
    })

    markerManager.addMarker({
        latlng : [48.8365430514207, 2.3943123262137607], //[48.8671938,2.3959993],
        title : "Boulangerie",
        mp3: "./assets/audio/anniversary/boulangerie.mp3"
    })

    markerManager.addMarker({
        latlng : [48.85493897028012, 2.354999734547234], //[48.8671938,2.3959993],
        title : "Chez Julien",
        mp3: "./assets/audio/anniversary/resto.mp3"
    })

    markerManager.addMarker({
        latlng : [48.8702190271689, 2.3113786857293666], //[48.8671938,2.3959993],
        title : "Hotel",
        mp3: "./assets/audio/anniversary/hotel.mp3"
    })
    return markerManager
}

function itineraryTest(){
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
    return markerManager
}
