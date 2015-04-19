declare module app.layout {
    class ShellController {
        private $rootScope;
        private $timeout;
        private config;
        private logger;
        static $inject: string[];
        constructor($rootScope: any, $timeout: ng.ITimeoutService, config: any, logger: blocks.logger.Logger);
        busyMessage: string;
        isBusy: boolean;
        navline: {
            title: any;
            text: string;
            link: string;
        };
        hideSplash(): void;
    }
}
