// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
var app;
(function (app) {
    'use strict';
    var ExceptionHandlerProvider = (function () {
        function ExceptionHandlerProvider() {
            this.config = {
                appErrorPrefix: undefined
            };
        }
        ExceptionHandlerProvider.prototype.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };
        ExceptionHandlerProvider.prototype.$get = function () {
            return { config: this.config };
        };
        ExceptionHandlerProvider.$inject = [];
        return ExceptionHandlerProvider;
    })();
    var ExceptionHandlerConfig = (function () {
        function ExceptionHandlerConfig($provide) {
            $provide.decorator('$exceptionHandler', ExtendedExceptionHandler);
        }
        ExceptionHandlerConfig.$inject = ['$provide'];
        return ExceptionHandlerConfig;
    })();
    var ExtendedExceptionHandler = (function () {
        function ExtendedExceptionHandler($delegate, exceptionHandler, logger) {
            return function (exception, cause) {
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
        ExtendedExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
        return ExtendedExceptionHandler;
    })();
    angular
        .module('blocks.exception')
        .provider('exceptionHandler', ExceptionHandlerProvider)
        .config(ExceptionHandlerConfig);
})(app || (app = {}));
//# sourceMappingURL=exception-handler.provider.js.map