'use strict';
var app;
(function (app) {
    var RouterHelper = (function () {
        function RouterHelper($location, $rootScope, $state, logger) {
            this.$location = $location;
            this.$rootScope = $rootScope;
            this.$state = $state;
            this.logger = logger;
            this.stateCounts = { errors: 0, changes: 0 };
            this.handlingStateChangeError = false;
            this.handleRoutingErrors();
            this.handleStateChanges();
        }
        RouterHelper.prototype.handleRoutingErrors = function () {
            //TODO: must inject $state so we can kick off routing
            // Route cancellation:
            // On routing error, go to the dashboard.
            // Provide an exit clause if it tries to do it twice.
            this.$rootScope.$on('$stateChangeError', this.handleStateChangeError);
        };
        RouterHelper.prototype.handleStateChangeError = function (event, toState, toParams, fromState, fromParams, error) {
            if (this.handlingStateChangeError) {
                return;
            }
            this.stateCounts.errors++;
            this.handlingStateChangeError = true;
            var destination = (toState &&
                (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                'unknown target';
            var msg = 'Error routing to ' + destination + '. ' +
                (error.data || '') + '. <br/>' + (error.statusText || '') +
                ': ' + (error.status || '');
            this.logger.warning(msg, [toState]);
            this.$location.path('/');
        };
        RouterHelper.prototype.handleStateChanges = function () {
            var _this = this;
            this.$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
                _this.stateCounts.changes++;
                _this.handlingStateChangeError = false;
                //var title = config.docTitle + ' ' + (toState.title || '');
                var title = (toState.title || '');
                _this.$rootScope.title = title; // data bind to <title>
            });
        };
        RouterHelper.$inject = ['$location', '$rootScope', '$state', 'logger'];
        return RouterHelper;
    })();
    angular
        .module('blocks.router')
        .service('RouterHelper', RouterHelper);
})(app || (app = {}));
//# sourceMappingURL=router-helper.service.js.map