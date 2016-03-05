
'use strict';

import L from '../../bower_components/leaflet/dist/leaflet';
import mapConfig from './map.config';

class Map {
    constructor() {
        this.map = L.map('map').setView([
            mapConfig.init.latitude,
            mapConfig.init.longitude
        ], mapConfig.init.zoom);

        L.Icon.Default.imagePath = mapConfig.imagePath;
        L.tileLayer(mapConfig.url, {attribution: mapConfig.attribution}).addTo(this.map);

        let legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {

            let div = L.DomUtil.create('div', 'info legend');
            div.innerHTML =
                '<i style="background:' + mapConfig.male.color + '"></i>' + mapConfig.male.label + '<br/>' +
                '<i style="background:' + mapConfig.female.color + '"></i>' + mapConfig.female.label;

            return div;
        };

        legend.addTo(this.map);
    }

    geoJson(json) {
        L.geoJson(json, {
            onEachFeature: (feature, layer) => {
                layer.bindPopup(feature.properties.popupContent);
            },
            pointToLayer: function(feature, latlng) {
                let circleMarker = L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: feature.properties.gender == "Female"? mapConfig.female.color : mapConfig.male.color,
                    color: "#000",
                    weight: 1,
                    popupAnchor: [15, 5],
                    opacity: 1,
                    fillOpacity: 0.8
                });

                return circleMarker;
            }
        }).addTo(this.map);
    }
}

export default Map;