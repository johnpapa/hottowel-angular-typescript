var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core').config(configureStates).run(handleRoutingErrors);
        configureStates.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
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
        handleRoutingErrors.$inject = ['$location', '$rootScope', '$state', 'logger'];
        function handleRoutingErrors($location, $rootScope, $state, logger) {
            var stateCounts = { errors: 0, changes: 0 };
            var handlingStateChangeError = false;
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                if (handlingStateChangeError) {
                    return;
                }
                stateCounts.errors++;
                handlingStateChangeError = true;
                var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';
                var msg = 'Error routing to ' + destination + '. ' + (error.data || '') + '. <br/>' + (error.statusText || '') + ': ' + (error.status || '');
                logger.warning(msg, [toState]);
                $location.path('/');
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                stateCounts.changes++;
                handlingStateChangeError = false;
                var title = (toState.title || '');
                $rootScope.title = title;
            });
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/core.route.js.map