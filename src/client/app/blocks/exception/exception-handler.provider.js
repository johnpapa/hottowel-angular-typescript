var blocks;
(function (blocks) {
    var exception;
    (function (_exception) {
        'use strict';
        var ExceptionHandlerProvider = (function () {
            function ExceptionHandlerProvider() {
                var _this = this;
                this.config = {
                    appErrorPrefix: undefined
                };
                this.$get = function () {
                    return { config: _this.config };
                };
            }
            ExceptionHandlerProvider.prototype.configure = function (appErrorPrefix) {
                this.config.appErrorPrefix = appErrorPrefix;
            };
            ExceptionHandlerProvider.$inject = [];
            return ExceptionHandlerProvider;
        })();
        _exception.ExceptionHandlerProvider = ExceptionHandlerProvider;
        config.$inject = ['$provide'];
        function config($provide) {
            $provide.decorator('$exceptionHandler', extendExceptionHandler);
        }
        extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
        function extendExceptionHandler($delegate, exceptionHandler, logger) {
            return function (exception, cause) {
                var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
                var errorData = { exception: exception, cause: cause };
                exception.message = appErrorPrefix + exception.message;
                $delegate(exception, cause);
                logger.error(exception.message, errorData);
            };
        }
        angular.module('blocks.exception').provider('exceptionHandler', ExceptionHandlerProvider).config(config);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));

//# sourceMappingURL=../../../../client/app/blocks/exception/exception-handler.provider.js.map