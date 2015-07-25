namespace blocks.exception {
    'use strict';

    export interface IException {
        catcher: (message: string) => (reason: string) => void;
    }

    export class Exception implements IException {
        static $inject: Array<string> = ['logger'];
        constructor(private logger: blocks.logger.Logger) {}

        catcher = (message: string) => (reason: string) => this.logger.error(message, reason);
    }

    angular
        .module('blocks.exception')
        .service('exception', Exception);
}
