'use strict';
var AdminRoute = (function () {
    function AdminRoute($stateProvider) {
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
    AdminRoute.prototype.configureStates = function () {
        // var states: any[] = this.states;
        this.states.forEach(function (state) {
            this.$stateProvider.state(state.state, state.config);
        });
    };
    AdminRoute.$inject = ['stateProvider'];
    return AdminRoute;
})();
angular
    .module('app.admin')
    .config(AdminRoute);
//# sourceMappingURL=admin.route.js.map