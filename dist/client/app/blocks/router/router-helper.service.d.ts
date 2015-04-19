declare module blocks.router {
    class RouterHelper {
        private $location;
        private $rootScope;
        private $state;
        private logger;
        static $inject: string[];
        constructor($location: any, $rootScope: any, $state: any, logger: any);
        private stateCounts;
        private handlingStateChangeError;
        private handleRoutingErrors();
        private handleStateChanges();
    }
}
