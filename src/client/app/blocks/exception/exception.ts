import { ILogger } from '../logger/logger';

'use strict';

export interface IException {
    catcher: (message: string) => (reason: string) => void;
}

class Exception implements IException {
    static $inject: Array<string> = ['logger'];
    constructor(private logger: ILogger) { }

    catcher = (message: string) => (reason: string) => this.logger.error(message, reason);
}

angular
    .module('blocks.exception')
    .service('exception', Exception);
