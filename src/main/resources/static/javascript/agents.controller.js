'use strict';

class AgentController {

    constructor(agentService, mapService) {
        this.agentService = agentService;
        this.mapService = mapService;

        this.agentService.getAgents().then(agents => {
            this.agents = agents;
            this.mapService.plot(agents);
        });
    }

    /**
     * Locates an agent on the map.
     * @param agent - agent JSON object.
     */
    locateAgent(agent) {
        this.mapService.pointToLocation(agent.latitude, agent.longitude, agent.name);
    }
}

AgentController.$inject = ['AgentService', 'MapService'];

export default AgentController;