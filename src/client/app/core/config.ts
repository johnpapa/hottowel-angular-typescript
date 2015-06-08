import { IExceptionHandlerProvider } from '../blocks/exception/exception-handler.provider';

'use strict';

export interface ICoreConfig {
    appErrorPrefix: string,
    appTitle: string
}

class CoreConfig implements ng.IServiceProvider {
    config: ICoreConfig;
    static $inject: Array<string> = ['toastr', '$logProvider', 'exceptionHandlerProvider'];
    constructor(toastr: Toastr, $logProvider: ng.ILogProvider, exceptionHandlerProvider: IExceptionHandlerProvider) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
        this.config = {
            appErrorPrefix: '[helloworld Error] ',
            appTitle: 'helloworld'
        }
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(this.config.appErrorPrefix);
    }

    $get = () => {
        this.config;
    }
}

angular
    .module('app.core')
    .provider('CoreConfig', CoreConfig)
    .value('config', (CoreConfig: ICoreConfig) => CoreConfig);
