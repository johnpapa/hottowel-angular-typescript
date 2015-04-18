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
        static $inject: string[];
        constructor($q: ng.IQService, dataservice: any, logger: blocks.logger.Logger);
        getMessageCount(): any;
        getPeople(): any;
    }
}
