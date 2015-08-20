angular.module("MyApp", ['agentService', 'leaflet-directive', 'mapConfig']).

    controller("AgentsController", function($scope, AgentService, mappingConfig) {

        angular.extend($scope, mappingConfig);

        AgentService.getAllAgents().then(function(data) {
            $scope.agents = data;
            $scope.geo = {};
            var length = data.length;
            for (var i = 0; i < length; i++) {
                $scope.geo[data[i].name] = {
                    lat: data[i].latitude,
                    lng: data[i].longitude,
                    message: data[i].name,
                    icon: data[i].gender === "Female" ? mappingConfig.icons.red_icon : {}
                }
            }

            angular.extend($scope, {
                markers: $scope.geo
            });
        });

        $scope.locateAgent = function(agent) {
            $scope.center = {
                lat: agent.latitude,
                lng: agent.longitude,
                zoom: 10,
                focus: true
            };

            $scope.markers[agent.name] = {
                lat: agent.latitude,
                lng: agent.longitude,
                focus: true,
                icon: agent.gender === "Female" ? mappingConfig.icons.red_icon : {},
                message: agent.name
            };
        };
    });