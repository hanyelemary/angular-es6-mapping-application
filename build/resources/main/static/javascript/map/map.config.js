angular
    .module('mapConfig', [])
    .constant("mappingConfig", {
        icons: {
            red_icon: {
                iconUrl: '/images/marker-icon-red.png',
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                popupAnchor:  [-8, -90] // point from which the popup should open relative to the iconAnchor
            }
        },
        center: {
            lat: 39.50,
            lng: -98.35,
            zoom: 4
        },
        layers: {
            baselayers: {
                googleTerrain: {
                    name: 'Google Terrain',
                    layerType: 'TERRAIN',
                    type: 'google'
                }
            }
        },
        defaults: {
            scrollwheel: false
        },
        legend: {
            colors: ['#2981ca', '#cf4746'],
            labels: ['Male', 'Female']
        },
        markers: {}
    });