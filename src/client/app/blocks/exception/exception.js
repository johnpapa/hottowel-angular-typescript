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
exports.Exception = Exception;
angular
    .module('blocks.exception')
    .service('exception', Exception);
//# sourceMappingURL=exception.js.map