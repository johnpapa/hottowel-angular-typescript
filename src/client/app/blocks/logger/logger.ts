module blocks.logger {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', Logger);

    class Logger {
        showToasts = true;
        
        static $inject = ['$log', 'toastr'];
        constructor(private $log: ng.ILogService, private toastr: Toastr) {}
        
        // straight to console; bypass toastr
        log(...args: any[]) {
            this.$log.log(args);
        }
        
        error(message, data, title) {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }

        info(message, data, title) {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }

        success(message, data, title) {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }

        warning(message, data, title) {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }
    }
}
