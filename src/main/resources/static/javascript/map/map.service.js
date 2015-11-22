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
        console.log(json);

        this.map.geoJson(data);

    }

    transform(object, index) {
        return {
            "type": "Feature",
            "properties": {
                "id": index,
                "title": object.name || "",
                "description": object.name || "",
                "marker-color": "#AA0000",
                "marker-size": "medium",
                "marker-zoom": "17"
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


//{
//    "type": "FeatureCollection",
    //    "features": [
        //{
        //    "type": "Feature",
        //    "properties": {
        //        "id": "krhy93as",
        //        "title": "Make it Mount Pleasant",
        //        "description": "<a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.",
        //        "marker-color": "#AA0000",
        //        "marker-size": "medium",
        //        "marker-symbol": "shop",
        //        "marker-zoom": "17"
        //    },
        //    "geometry": {
        //        "type": "Point",
        //        "coordinates": [
        //            -77.038659,
        //            38.931567
        //        ]
        //    }
        //}
//    ]
//}


    //plotData(data) {
    //    let length = data.length || 0,
    //        geoPoints = {};
    //    for (let i = 0; i < length; i++) {
    //        geoPoints[data[i].name] = {
    //            lat: data[i].latitude,
    //            lng: data[i].longitude,
    //            message: data[i].name,
    //            icon: data[i].gender === "Female" ? this.config.icons.red_icon : {}
    //        }
    //    }
    //    return geoPoints;
    //}
}

export default MapService;