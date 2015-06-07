// ((): void => {
// })();
// What: Creates an IIFE
// When: Use when you have no TypeScript components to export
// Less function wrapping
'use strict';
var CoreRoute = (function () {
    function CoreRoute() {
    }
    CoreRoute.prototype.appRun = function (RouterHelper) { };
    CoreRoute.prototype.configureStates = function ($stateProvider, $locationProvider, $urlRouterProvider) {
        var otherwise = '/404';
        var states = [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise(otherwise);
    };
    CoreRoute.$inject = ['stateProvider', '$locationProvider', '$urlRouterProvider'];
    return CoreRoute;
})();
var coreRoute = new CoreRoute();
angular
    .module('app.core')
    .config(coreRoute.configureStates)
    .run(coreRoute.appRun);
//# sourceMappingURL=core.route.js.map