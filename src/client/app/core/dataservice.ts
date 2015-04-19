module app.core {
    'use strict';

    export interface IDataService {
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<any>;
    }

    export class DataService implements IDataService {
        static $inject = ['$http', '$q', 'logger'];
        constructor(private $http: ng.IHttpService,
            private $q: ng.IQService,
            private logger: blocks.logger.Logger) {
        }

        getMessageCount: () => ng.IPromise<number> = () => this.$q.when(72);

        getPeople: () => ng.IPromise<any> = () =>
            this.$http.get('/api/people')
                .then(this.success)
                .catch(this.fail);

        private success: (any) => {} = (response) => response.data;

        private fail: (any) => {} = (error) => {
            var msg = 'query for people failed. ' + error.data.description;
            this.logger.error(msg);
            return this.$q.reject(msg);
        }
    }

    angular
        .module('app.core')
        .service('dataservice', DataService);
}
