namespace app.layout {
    'use strict';

    export interface IStateExtra extends ng.ui.IState {
        settings: any;
    }

    export class SidebarController {
        static $inject: Array<string> = ['$state'];
        constructor(private $state: ng.ui.IStateService) {
            this.getNavRoutes();
        }

        navRoutes: IStateExtra[];
        states: IStateExtra[] = <IStateExtra[]>this.$state.get();

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
