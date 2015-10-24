namespace blocks.router {
  'use strict';

  export interface IRouterHelper {
    stateCounts: { errors: number; changes: number };
  }

  export class RouterHelper implements IRouterHelper {
    static $inject: Array<string> = ['$location', '$rootScope', '$state', 'logger'];
    constructor(private $location: any, private $rootScope: any, private $state: any, private logger: any) {
      this.handleRoutingErrors();
      this.handleStateChanges();
    }

    stateCounts = { errors: 0, changes: 0 };

    private handlingStateChangeError: boolean = false;

    private handleRoutingErrors() {
            //TODO: must inject $state so we can kick off routing
            // Route cancellation:
            // On routing error, go to the dashboard.
            // Provide an exit clause if it tries to do it twice.
            this.$rootScope.$on('$stateChangeError',
                (event: any, toState: any, toParams: any, fromState: any, fromParams: any, error: any) => {
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
                (event: any, toState: any, toParams: any, fromState: any, fromParams: any, error: any) => {
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