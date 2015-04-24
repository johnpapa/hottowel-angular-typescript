var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        angular
            .module('app.admin')
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
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));
//# sourceMappingURL=admin.route.js.map