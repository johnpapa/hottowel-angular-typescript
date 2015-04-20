declare module app.layout {
    interface IStateExtra extends ng.ui.IState {
        settings: any;
    }
    class SidebarController {
        private $state;
        static $inject: Array<string>;
        constructor($state: ng.ui.IStateService);
        navRoutes: IStateExtra[];
        states: IStateExtra[];
        private getNavRoutes();
        isCurrent(route: any): string;
    }
}
