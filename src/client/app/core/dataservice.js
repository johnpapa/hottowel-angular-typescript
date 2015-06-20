var app;
(function (app) {
    'use strict';
    var DataService = (function () {
        function DataService($http, $q, exception, logger) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.exception = exception;
            this.logger = logger;
            this.getMessageCount = function () { return _this.$q.when(72); };
        }
        DataService.prototype.getPeople = function () {
            return this.$http
                .get('/api/people')
                .then(this.success)
                .catch(this.fail);
        };
        DataService.prototype.success = function (response) {
            return response.data;
        };
        DataService.prototype.fail = function (error) {
            var msg = error.data.description;
            var reason = 'query for people failed.';
            this.exception.catcher(msg)(reason);
            return this.$q.reject(msg);
        };
        DataService.$inject = ['$http', '$q', 'exception', 'logger'];
        return DataService;
    })();
    angular
        .module('app.core')
        .service('dataservice', DataService);
})(app || (app = {}));
//# sourceMappingURL=dataservice.js.map