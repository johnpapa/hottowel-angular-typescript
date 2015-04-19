declare module app.core {
    interface IDataService {
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<any>;
    }
    class DataService implements IDataService {
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
