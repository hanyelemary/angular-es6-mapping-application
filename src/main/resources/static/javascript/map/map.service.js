'use strict';

import Map from './map.js'

class MapService {
    constructor() {
        this.map = new Map();
    }

    plot(data) {
        let json = {
            "type": "FeatureCollection",
            "features": data.map(this.transform) || []
        };

        this.map.geoJson(json);

    }

    transform(object, index) {
        return {
            "type": "Feature",
            "properties": {
                "id": index,
                "popupContent": object.name || "",
                "gender": object.gender || ""
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    object.longitude || "",
                    object.latitude || ""
                ]
            }
        }
    }

    pointToLocation(lat, lng, name) {
        this.map.popUp(lat, lng, name);
    }
}

export default MapService;