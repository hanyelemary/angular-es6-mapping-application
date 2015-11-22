'use strict';

import AgentService from './agents.service';
import MapService from './map/map.service';
import AgentController from './agents.controller';
import Map from './map/map.js'

angular.module("MyApp", [])
    .controller('AgentController', AgentController)
    .service('MapService', MapService)
    .service('AgentService', AgentService);