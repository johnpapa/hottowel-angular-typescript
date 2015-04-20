declare module app.core {
    interface IDataService {
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<any>;
    }
    class DataService implements IDataService {
        private $http;
        private $q;
        private exception;
        private logger;
        static $inject: Array<string>;
        constructor($http: ng.IHttpService, $q: ng.IQService, exception: blocks.exception.IException, logger: blocks.logger.Logger);
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<any>;
        private success;
        private fail;
    }
}
