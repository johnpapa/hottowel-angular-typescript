'use strict';
var DashboardRoute = (function () {
    function DashboardRoute() {
    }
    DashboardRoute.prototype.configureStates = function ($stateProvider) {
        var states = this.getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    };
    DashboardRoute.prototype.getStates = function () {
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
    };
    DashboardRoute.$inject = ['stateProvider'];
    return DashboardRoute;
})();
angular
    .module('app.dashboard')
    .config(new DashboardRoute().configureStates);
//# sourceMappingURL=dashboard.route.js.map