import { ILogger } from '../logger/logger';

export interface IException {
    catcher: (message: string) => (reason: string) => void;
}

module app {
    'use strict';

    class Exception implements IException {
        static $inject: Array<string> = ['$q', 'logger'];
        constructor(private $q: ng.IQService, private logger: ILogger) { }

        catcher = (message: string) => (error: any) => {
            var thrownDescription: string;
            var newMessage: string;
            if (error.data && error.data.description) {
                thrownDescription = '\n' + error.data.description;
                newMessage = message + thrownDescription;
            }
            error.data.description = newMessage;
            this.logger.error(newMessage);
            return this.$q.reject(error);
        }
    }

    angular
        .module('blocks.exception')
        .service('exception', Exception);
}
