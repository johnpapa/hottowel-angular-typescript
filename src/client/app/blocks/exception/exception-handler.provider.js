// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
var blocks;
(function (blocks) {
    var exception;
    (function (exception_1) {
        'use strict';
        var ExceptionHandlerProvider = (function () {
            function ExceptionHandlerProvider() {
                var _this = this;
                this.config = {
                    appErrorPrefix: undefined
                };
                this.$get = function () { return { config: _this.config }; };
            }
            ExceptionHandlerProvider.prototype.configure = function (appErrorPrefix) {
                this.config.appErrorPrefix = appErrorPrefix;
            };
            ExceptionHandlerProvider.$inject = [];
            return ExceptionHandlerProvider;
        })();
        exception_1.ExceptionHandlerProvider = ExceptionHandlerProvider;
        config.$inject = ['$provide'];
        function config($provide) {
            $provide.decorator('$exceptionHandler', extendExceptionHandler);
        }
        extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
        /**
         * Extend the $exceptionHandler service to also display a toast.
         * @param  {Object} $delegate
         * @param  {Object} exceptionHandler
         * @param  {Object} logger
         * @return {Function} the decorated $exceptionHandler service
         */
        function extendExceptionHandler($delegate, exceptionHandler, logger) {
            return function (exception, cause) {
                //            var appErrorPrefix = '[Error] ';
                var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
                var errorData = { exception: exception, cause: cause };
                exception.message = appErrorPrefix + exception.message;
                $delegate(exception, cause);
                /**
                 * Could add the error to a service's collection,
                 * add errors to $rootScope, log errors to remote web server,
                 * or log locally. Or throw hard. It is entirely up to you.
                 * throw exception;
                 *
                 * @example
                 *     throw { message: 'error message we added' };
                 */
                logger.error(exception.message, errorData);
            };
        }
        angular
            .module('blocks.exception')
            .provider('exceptionHandler', ExceptionHandlerProvider)
            .config(config);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=exception-handler.provider.js.map