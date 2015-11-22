'use strict';

class AgentService {
    constructor($http) {
        this.$http = $http;
    }

    getAgents() {
        return this.$http.get('/agents').then(result => result.data);
    }
}

AgentService.$inject = ['$http'];

export default AgentService;