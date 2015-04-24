var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular
            .module('app.dashboard')
            .config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
        }
        function getStates() {
            return [
                {
                    state: 'dashboard',
                    config: {
                        url: '/',
                        templateUrl: 'app/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        title: 'dashboard',
                        settings: {
                            nav: 1,
                            content: '<i class="fa fa-dashboard"></i> Dashboard'
                        }
                    }
                }
            ];
        }
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.route.js.map