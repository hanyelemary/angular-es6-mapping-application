angular
    .module('agentService', [])
    .factory("AgentService", function($http, $q) {

        return {
            getAllAgents: function() {
                var defer = $q.defer();
                $http.get('/agents', { cache: 'true'})
                    .success(function(data) {
                        defer.resolve(data);
                    });

                return defer.promise;
            }
        };
    });