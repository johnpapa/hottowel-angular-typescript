'use strict';


class AdminRoute {
    static $inject: Array<string> = ['stateProvider'];
    constructor($stateProvider: ng.ui.IStateProvider) {
        this.configureStates()
    }
    configureStates() {
        // var states: any[] = this.states;
        this.states.forEach(function(state) {
            this.$stateProvider.state(state.state, state.config);
        });
    }

    states: any[] = [
        {
            state: 'admin',
            config: {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminController',
                controllerAs: 'vm',
                title: 'Admin',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Admin'
                }
            }
        }
    ];
}

angular
    .module('app.admin')
    .config(AdminRoute);
