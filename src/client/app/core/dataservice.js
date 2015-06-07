var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var DataService = (function () {
            function DataService($http, $q, exception, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.getMessageCount = function () { return _this.$q.when(72); };
                this.getPeople = function () {
                    return _this.$http.get('/api/people')
                        .then(_this.success)
                        .catch(_this.fail);
                };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = error.data.description;
                    var reason = 'query for people failed.';
                    _this.exception.catcher(msg)(reason);
                    return _this.$q.reject(msg);
                };
            }
            DataService.$inject = ['$http', '$q', 'exception', 'logger'];
            return DataService;
        })();
        core.DataService = DataService;
        angular
            .module('app.core')
            .service('dataservice', DataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=dataservice.js.map