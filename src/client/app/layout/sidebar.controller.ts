export interface IStateExtra extends ng.ui.IState {
    settings: any;
}

module app {
    'use strict';

    interface ISidebarController {
        navRoutes: Array<IStateExtra>;
        states: Array<IStateExtra>;
        isCurrent: (route: { title: string }) => string;
    }

    class SidebarController implements ISidebarController {
        static $inject: Array<string> = ['$state'];
        constructor(private $state: ng.ui.IStateService) {
            this.getNavRoutes();
        }

        navRoutes: Array<IStateExtra>;
        states = <Array<IStateExtra>>this.$state.get();

        isCurrent(route: { title: string }) {
            var currentState: any = this.$state.current;
            if (!route.title || !currentState || !currentState.title) {
                return '';
            }
            var menuName: string = route.title;
            return currentState.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }

        private getNavRoutes() {
            this.navRoutes = this.states
                .filter((state) => state.settings && state.settings.nav)
                .sort((state1, state2) => state1.settings.nav - state2.settings.nav);
        }
    }

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);
}