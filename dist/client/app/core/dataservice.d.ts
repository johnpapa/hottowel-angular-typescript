declare module app.core {
    class DataService {
        private $http;
        private $q;
        private logger;
        static $inject: string[];
        constructor($http: ng.IHttpService, $q: ng.IQService, logger: blocks.logger.Logger);
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<any>;
        private success;
        private fail;
    }
}
