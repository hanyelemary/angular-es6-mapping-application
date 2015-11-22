
'use strict';

var MapConfig = {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
    imagePath: '../../images/marker-icon-red.png',
    init: {
        latitude: 39.50,
        longitude: -98.35,
        zoom: 4
    }
};

export default MapConfig;