
'use strict';

import L from '../../bower_components/leaflet/dist/leaflet';
import mapConfig from './map.config';

class Map {
    constructor() {
        this.map = L.map('map').setView(
            [mapConfig.init.latitude, mapConfig.init.longitude], mapConfig.init.zoom);

        L.Icon.Default.imagePath = mapConfig.imagePath;

        // load a tile layer
        L.tileLayer(mapConfig.url, {attribution: mapConfig.attribution}).addTo(this.map);
        L.geoJson({
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "id": "krhy93as",
                        "title": "Make it Mount Pleasant",
                        "marker-color": "#AA0000",
                        "marker-size": "medium",
                        "marker-zoom": "17"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -77.038659,
                            38.931567
                        ]
                    }
                }
            ]
        }).addTo(this.map);
    }

    geoJson(json) {
        L.geoJson(json).addTo(this.map);
    }

    //static config() {
    //    return {
    //        icons: {
    //            red_icon: {
    //                iconUrl: '/images/marker-icon-red.png',
    //                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //                popupAnchor:  [-8, -90] // point from which the popup should open relative to the iconAnchor
    //            }
    //        },
    //        center: {
    //            lat: 39.50,
    //            lng: -98.35,
    //            zoom: 4
    //        },
    //        layers: {
    //            baselayers: {
    //                googleTerrain: {
    //                    name: 'Google Terrain',
    //                    layerType: 'TERRAIN',
    //                    type: 'google'
    //                }
    //            }
    //        },
    //        defaults: {
    //            scrollwheel: false
    //        },
    //        legend: {
    //            colors: ['#2981ca', '#cf4746'],
    //            labels: ['Male', 'Female']
    //        },
    //        markers: {}
    //    }
    //}
}

export default Map;