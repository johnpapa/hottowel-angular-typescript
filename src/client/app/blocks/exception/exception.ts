module blocks.exception {
    'use strict';

    export interface IException {
        catcher: (string) => (string) => void;
    }

    export class Exception implements IException {
        static $inject: Array<string> = ['logger'];
        constructor(private logger: blocks.logger.Logger) {}

        catcher: (string) => (string) => void =
            (message) => (reason) => this.logger.error(message, reason);
    }

    angular
        .module('blocks.exception')
        .service('exception', Exception);
}
