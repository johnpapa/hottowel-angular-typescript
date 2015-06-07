'use strict';

class DashboardRoute {
    static $inject: Array<string> = ['stateProvider'];
    configureStates($stateProvider: ng.ui.IStateProvider) {
        var states = this.getStates();
        states.forEach(function(state) {
            $stateProvider.state(state.state, state.config);
        });
    }

    getStates() {
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
}

angular
    .module('app.dashboard')
    .config(new DashboardRoute().configureStates);
