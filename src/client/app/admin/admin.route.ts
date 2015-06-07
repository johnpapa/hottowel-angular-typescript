'use strict';


export class AdminRoute implements ng.IServiceProvider {
    states: Array<any>;
    $stateProvider: ng.ui.IStateProvider;
    
    static $inject: Array<string> = ['$stateProvider'];
    constructor($stateProvider: ng.ui.IStateProvider) {
        this.$stateProvider = $stateProvider; 
        this.states = [
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
        this.configureStates();
    }
    
    $get() : any {
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
    .module('app.admin')
    .provider('AdminRoute', AdminRoute)
    .config((AdminRouteProvider: AdminRoute) => { 
        //AdminRouteProvider.configureStates();
    });
