'use strict';

module app {
    interface IDashboardRoute {
        getStates: () => Array<any>;
    }

    class DashboardRoute implements ng.IServiceProvider {
        states: Array<any>;
        $stateProvider: ng.ui.IStateProvider;

        static $inject: Array<string> = ['$stateProvider'];
        constructor($stateProvider: ng.ui.IStateProvider) {
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

        $get(): IDashboardRoute {
            return {
                getStates: () => { return this.states; }
            };
        }

        configureStates() {
            var sp = this.$stateProvider;
            this.states.forEach((state) => {
                sp.state(state.state, state.config);
            });
        }
    }

    angular
        .module('app.dashboard')
        .provider('DashboardRoute', DashboardRoute)
        .config((DashboardRouteProvider: DashboardRoute) => { });
}
