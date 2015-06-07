var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        'use strict';
        var Logger = (function () {
            function Logger($log, toastr) {
                this.$log = $log;
                this.toastr = toastr;
            }
            // straight to console; bypass toastr
            Logger.prototype.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                this.$log.log(args);
            };
            Logger.prototype.error = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.info = function (message, data, title) {
                this.toastr.info(message, title);
                this.$log.info('Info: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.success = function (message, data, title) {
                this.toastr.success(message, title);
                this.$log.info('Success: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.warning = function (message, data, title) {
                this.toastr.warning(message, title);
                this.$log.warn('Warning: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.$inject = ['$log', 'toastr'];
            return Logger;
        })();
        logger.Logger = Logger;
        angular
            .module('blocks.logger')
            .service('logger', Logger);
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=logger.js.map