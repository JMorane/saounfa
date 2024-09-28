import 'https://unpkg.com/leaflet';
import { getMap, getCurrentPos } from './map.js';

const ICON_SIZE = 30;

function setStoredMarker(marker_id, was_seen, displayed, color) {
    var value = {
        was_seen: was_seen,
        displayed: displayed,
        color: color
    };
    //console.log("Setting");
    //console.log(marker_id, value);
    localStorage.setItem(marker_id.toString(), JSON.stringify(value));
}


function getStoredMarker(marker_id) {
    var defaultValue = {
        was_seen: false,
        displayed: false,
        color: "lightgray"
    };
    var value = JSON.parse(localStorage.getItem(marker_id.toString()));
    console.log(value);
    //console.log("Getting");
    //console.log(marker_id, value);
    return value !== null ? value : defaultValue;
}

class MarkerManager {
    constructor({add_markers_at_init}) {
        this.map = getMap();
        this.markers = [];
        this.add_markers_at_init = add_markers_at_init;
        setInterval(this.activateMarkersNearby.bind(this), 1000);
    }

    addMarker({latlng, color="lightgray", title = "Marker", marker_type = "inactive", mp3 = null}) {
        console.log(`Adding ${title}`);

        var idx = this.markers.length + 1;
        //localStorage.removeItem(idx.toString()); //TODO: comment this line
        var stored = getStoredMarker(idx)

        var icon = new L.AwesomeNumberMarkers({
            number: idx, 
            markerColor: stored.color,
        });

        var marker = L.marker(latlng, {icon: icon});
        marker.title = title;
        marker.marker_type = marker_type;
        marker.idx = idx;
        marker.mp3 = mp3;

        marker.color = stored.color;
        marker.was_seen = stored.was_seen;
        marker.displayed = stored.displayed;

        // add click event
        marker.on('click', function() {

            var audio = document.getElementById('audioPlayer');
            if ((!audio.paused) && (audio.src.split('/').pop() == marker.mp3.split('/').pop())){
                // We check if we are on the same marker
                // audio.pause();
                // audio.currentTime = 0; // Reset audio to the beginning
            }
            else {
                if (marker.marker_type == "active"){
                    console.log("play");
                    audio.src = marker.mp3;
                    if (audio.paused) {
                        audio.play();
                    }
                }
            }
          });

        // add to map 
        if ((this.markers.length == 0) || (this.add_markers_at_init)){
            // First marker OR any marker but should be shown anyway
            marker.displayed = true;
            // marker.addTo(this.map);
        }

        // add to markers list
        this.markers.push(marker);

        if (marker.displayed == true){
            marker.addTo(this.map);
        }

        return marker;
    }

    updateMarker({marker, marker_type = null}) {
        if ((marker_type == "active") && (marker.marker_type != "active"))  {
            // Check if previous markers were seen
            if ((marker.idx > 1) && !(this.markers[marker.idx-2].was_seen)) {
                return
            }
            if (!marker.displayed){
                this.markers[marker.idx-1].displayed = true;
                this.markers[marker.idx-1].addTo(this.map)
            }
            var color = "green";
            marker.marker_type = marker_type;
            var icon = new L.AwesomeNumberMarkers({
                number: marker.idx, 
                markerColor: color,
            });
            marker.setIcon(icon);
            marker.color = color;

            // If not already playing, play the audio:
            marker.fireEvent('click');
            marker.was_seen = true;

            // If next marker exists and isn't displayed, do it:
            if ((marker.idx < this.markers.length) && !(this.markers[marker.idx].displayed)){
                //this.markers[marker.idx].displayed = true;
                //this.markers[marker.idx].addTo(this.map)
            }
        }
        if ((marker_type == "inactive") && (marker.marker_type != "inactive")){
            var color = (marker.was_seen) ? 'blue' : 'lightgray';

            marker.color = color;

            marker.marker_type = marker_type;
            var icon = new L.AwesomeNumberMarkers({
                number: marker.idx, 
                markerColor: color,
            });
            marker.setIcon(icon);
        }
        setStoredMarker(marker.idx, marker.was_seen, marker.displayed, marker.color);
    }

    removeAllMarkers() {
        this.markers.forEach(marker => marker.remove());
        this.markers = [];
    }

    activateMarkersNearby(){
        const self = this;
        function activateMarkerNearBy(marker){
            const currentPos = getCurrentPos();
            var isWithinCircle = currentPos.circle.getBounds().contains(marker.getLatLng());
            if (isWithinCircle) {
                self.updateMarker({
                    marker,
                    marker_type : "active",
                });
            } else {
                self.updateMarker({
                    marker, 
                    marker_type : "inactive",
                });
            }
        }
        this.markers.forEach(activateMarkerNearBy);
    }

}

export { MarkerManager };