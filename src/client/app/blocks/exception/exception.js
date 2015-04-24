var blocks;
(function (blocks) {
    var exception;
    (function (exception) {
        'use strict';
        var Exception = (function () {
            function Exception(logger) {
                var _this = this;
                this.logger = logger;
                this.catcher = function (message) { return function (reason) { return _this.logger.error(message, reason); }; };
            }
            Exception.$inject = ['logger'];
            return Exception;
        })();
        exception.Exception = Exception;
        angular
            .module('blocks.exception')
            .service('exception', Exception);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=exception.js.map