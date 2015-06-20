// ((): void => {
// })();
// What: Creates an IIFE
// When: Use when you have no TypeScript components to export
// Less function wrapping

import { IRouterHelper } from '../blocks/router/router-helper.service';

module app {
    'use strict';

    class CoreRoute {

        appRun(RouterHelper: IRouterHelper) { }

        static $inject: Array<string> = ['stateProvider', '$locationProvider', '$urlRouterProvider'];
        configureStates($stateProvider: ng.ui.IStateProvider,
            $locationProvider: ng.ILocationProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            var otherwise = '/404';
            let states = [
                {
                    state: '404',
                    config: {
                        url: '/404',
                        templateUrl: 'app/core/404.html',
                        title: '404'
                    }
                }
            ];
            states.forEach(function(state) {
                $stateProvider.state(state.state, state.config);
            });
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise(otherwise);
        }
    }

    let coreRoute = new CoreRoute();

    angular
        .module('app.core')
        .config(coreRoute.configureStates)
        .run(coreRoute.appRun);

}