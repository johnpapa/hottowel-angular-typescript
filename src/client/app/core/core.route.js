var app;
(function (app) {
    var core;
    (function (core) {
        // ((): void => {
        // })();
        // What: Creates an IIFE
        // When: Use when you have no TypeScript components to export
        // Less function wrapping
        'use strict';
        angular
            .module('app.core')
            .config(configureStates)
            .run(appRun);
        appRun.$inject = ['RouterHelper'];
        function appRun(RouterHelper) { }
        configureStates.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
        /* @ngInject */
        function configureStates($stateProvider, $locationProvider, $urlRouterProvider) {
            var otherwise = '/404';
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise(otherwise);
        }
        function getStates() {
            return [
                {
                    state: '404',
                    config: {
                        url: '/404',
                        templateUrl: 'app/core/404.html',
                        title: '404'
                    }
                }
            ];
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.route.js.map