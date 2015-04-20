declare module blocks.router {
    interface IRouterHelper {
        stateCounts: {
            errors: number;
            changes: number;
        };
    }
    class RouterHelper implements IRouterHelper {
        private $location;
        private $rootScope;
        private $state;
        private logger;
        static $inject: string[];
        constructor($location: any, $rootScope: any, $state: any, logger: any);
        stateCounts: {
            errors: number;
            changes: number;
        };
        private handlingStateChangeError;
        private handleRoutingErrors();
        private handleStateChanges();
    }
}
