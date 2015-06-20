var app;
(function (app) {
    'use strict';
    var Exception = (function () {
        function Exception($q, logger) {
            var _this = this;
            this.$q = $q;
            this.logger = logger;
            this.catcher = function (message) { return function (error) {
                var thrownDescription;
                var newMessage;
                if (error.data && error.data.description) {
                    thrownDescription = '\n' + error.data.description;
                    newMessage = message + thrownDescription;
                }
                error.data.description = newMessage;
                _this.logger.error(newMessage);
                return _this.$q.reject(error);
            }; };
        }
        Exception.$inject = ['$q', 'logger'];
        return Exception;
    })();
    angular
        .module('blocks.exception')
        .service('exception', Exception);
})(app || (app = {}));
//# sourceMappingURL=exception.js.map