import { ILogger } from '../blocks/logger/logger';
import { IException } from '../blocks/exception/exception';

export interface IDataService {
    getMessageCount: () => ng.IPromise<number>;
    getPeople: () => ng.IPromise<any>;
}

module app {
    'use strict';

    class DataService implements IDataService {
        static $inject: Array<string> = ['$http', '$q', 'exception', 'logger'];
        constructor(private $http: ng.IHttpService,
            private $q: ng.IQService,
            private exception: IException,
            private logger: ILogger) {
        }

        getMessageCount = () => this.$q.when(72);

        getPeople() {
            return this.$http
                .get('/api/people')
                .then(this.success)
                .catch(this.fail);
        }
        
        private success(response: { data: any }) {
            return response.data;
        }

        private fail(error: any) {
            var msg = error.data.description;
            var reason = 'query for people failed.';
            this.exception.catcher(msg)(reason);
            return this.$q.reject(msg);
        }
    }

    angular
        .module('app.core')
        .service('dataservice', DataService);
}