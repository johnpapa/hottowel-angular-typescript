module blocks.router {
    'use strict';

    export interface IRouterHelper {
        stateCounts: { errors: number; changes: number};
    }

    export class RouterHelper implements IRouterHelper {
        static $inject = ['$location', '$rootScope', '$state', 'logger'];
        constructor(private $location, private $rootScope, private $state, private logger) {
            this.handleRoutingErrors();
            this.handleStateChanges();
        }

        stateCounts = { errors: 0, changes: 0 };
        private handlingStateChangeError = false;

        private handleRoutingErrors() {
            //TODO: must inject $state so we can kick off routing
            // Route cancellation:
            // On routing error, go to the dashboard.
            // Provide an exit clause if it tries to do it twice.
            this.$rootScope.$on('$stateChangeError',
                (event, toState, toParams, fromState, fromParams, error) => {
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
                }
                );
        }

        private handleStateChanges() {
            this.$rootScope.$on('$stateChangeSuccess',
                (event, toState, toParams, fromState, fromParams) => {
                    this.stateCounts.changes++;
                    this.handlingStateChangeError = false;
                    //var title = config.docTitle + ' ' + (toState.title || '');
                    var title = (toState.title || '');
                    this.$rootScope.title = title; // data bind to <title>
                });
        }
    }

    angular
        .module('blocks.router')
        .service('RouterHelper', RouterHelper);
}