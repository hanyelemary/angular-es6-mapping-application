
'use strict';

var MapConfig = {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    init: {
        latitude: 39.50,
        longitude: -98.35,
        zoom: 4
    },
    male: {
        color: '#2981ca',
        label: 'Male'
    },
    female: {
        color: '#cf4746',
        label: 'Female'
    }
};

export default MapConfig;