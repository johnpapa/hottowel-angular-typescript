module blocks.logger {
    'use strict';

    export interface ILogger {
        info: (message: string, data?: {}, title?: string) => void;
        error: (message: string, data?: {}, title?: string) => void;
        success: (message: string, data?: {}, title?: string) => void;
        warning: (message: string, data?: {}, title?: string) => void;
    }

    export class Logger implements ILogger {
        public static $inject = ['$log', 'toastr'];
        constructor(private $log: ng.ILogService, private toastr: Toastr) {}

        // straight to console; bypass toastr
        log(...args: any[]) {
            this.$log.log(args);
        }

        error(message: string, data?: {}, title?: string) {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }

        info(message: string, data?: {}, title?: string) {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }

        success(message: string, data?: {}, title?: string) {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message: string, data?: {}, title?: string) {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }
    }

    angular
        .module('blocks.logger')
        .service('logger', Logger);
}
