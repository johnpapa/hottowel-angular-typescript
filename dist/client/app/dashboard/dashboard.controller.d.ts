declare module app.dashboard {
    class DashboardController {
        private $q;
        private dataservice;
        private logger;
        news: {
            title: string;
            description: string;
        };
        messageCount: number;
        people: Array<any>;
        title: string;
        static $inject: Array<string>;
        constructor($q: ng.IQService, dataservice: app.core.IDataService, logger: blocks.logger.Logger);
        getMessageCount(): ng.IPromise<number>;
        getPeople(): ng.IPromise<any[]>;
    }
}
