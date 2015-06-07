'use strict';
var DashboardRoute = (function () {
    function DashboardRoute($stateProvider) {
        this.$stateProvider = $stateProvider;
        this.states = [
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
        this.configureStates();
    }
    DashboardRoute.prototype.$get = function () {
        var _this = this;
        return {
            getStates: function () { return _this.states; }
        };
    };
    DashboardRoute.prototype.configureStates = function () {
        var sp = this.$stateProvider;
        this.states.forEach(function (state) {
            sp.state(state.state, state.config);
        });
    };
    DashboardRoute.$inject = ['$stateProvider'];
    return DashboardRoute;
})();
exports.DashboardRoute = DashboardRoute;
angular
    .module('app.dashboard')
    .provider('DashboardRoute', DashboardRoute)
    .config(function (DashboardRouteProvider) { });
//# sourceMappingURL=dashboard.route.js.map