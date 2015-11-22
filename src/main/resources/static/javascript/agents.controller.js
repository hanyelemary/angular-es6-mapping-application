'use strict';

class AgentController {

    constructor(agentService, mapService) {
        this.agentService = agentService;
        this.mapService = mapService;
        this.init();
    }

    init() {
        var vm = this;
        this.agentService.getAgents().then(agents => {
            vm.agents = agents;
            this.mapService.plot(agents);
        });
    }
}

AgentController.$inject = ['AgentService', 'MapService'];

export default AgentController;