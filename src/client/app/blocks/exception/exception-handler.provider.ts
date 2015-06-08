// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run

// import { angular } from 'angular';
import { ILogger } from '../logger/logger';

'use strict';

interface IExceptionHandlerConfig {
    appErrorPrefix: string
}

export interface IExceptionHandlerProvider {
    $get: () => { config: IExceptionHandlerConfig };
    configure: (appErrorPrefix: any) => void;
    config: IExceptionHandlerConfig;
}

class ExceptionHandlerProvider implements IExceptionHandlerProvider {
    static $inject: Array<string> = [];
    constructor() { }
    config: IExceptionHandlerConfig = {
        appErrorPrefix: undefined
    }

    configure(appErrorPrefix: any) {
        this.config.appErrorPrefix = appErrorPrefix;
    }
    $get: () => { config: IExceptionHandlerConfig } = () => { return { config: this.config }; }
}

class ExceptionHandlerConfig {
    static $inject: Array<string> = ['$provide'];

    constructor($provide: ng.auto.IProvideService) {
        $provide.decorator('$exceptionHandler', ExtendedExceptionHandler);
    }
}

class ExtendedExceptionHandler {
    static $inject: Array<string> = ['$delegate', 'exceptionHandler', 'logger'];
    constructor($delegate: ng.IExceptionHandlerService, exceptionHandler: any, logger: ILogger) {
        return function(exception: any, cause: any) {
            var appErrorPrefix = this.exceptionHandler.config.appErrorPrefix || '';
            var errorData = { exception: exception, cause: cause };
            exception.message = appErrorPrefix + exception.message;
            this.$delegate(exception, cause);
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             */
            this.logger.error(exception.message, errorData);
        };
    }
}

angular
    .module('blocks.exception')
    .provider('exceptionHandler', ExceptionHandlerProvider)
    .config(ExceptionHandlerConfig);
