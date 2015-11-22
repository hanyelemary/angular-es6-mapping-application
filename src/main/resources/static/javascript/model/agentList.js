"use strict";

class AgentList {
    constructor() {
        this.agents = {};
    }

    add(agent) {
        this.agents.push(agent);
    }
}

export default AgentList;