// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
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
exports.ExceptionHandlerProvider = ExceptionHandlerProvider;
var ExceptionHandlerConfig = (function () {
    function ExceptionHandlerConfig($provide, $delegate, exceptionHandler, logger) {
        $provide.decorator('$exceptionHandler', this.extendedExceptionHandler);
    }
    // configure() {
    //     this.$provide.decorator('$exceptionHandler', this.extendedExceptionHandler);
    // }
    ExceptionHandlerConfig.prototype.extendedExceptionHandler = function () {
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
    };
    ExceptionHandlerConfig.$inject = ['$delegate', '$provide', 'exceptionHandler', 'logger'];
    return ExceptionHandlerConfig;
})();
angular
    .module('blocks.exception')
    .provider('exceptionHandler', ExceptionHandlerProvider)
    .config(ExceptionHandlerConfig);
//# sourceMappingURL=exception-handler.provider.js.map