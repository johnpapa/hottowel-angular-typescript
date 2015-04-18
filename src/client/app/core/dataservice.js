var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var DataService = (function () {
            function DataService($http, $q, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.logger = logger;
                this.getMessageCount = function () { return _this.$q.when(72); };
                this.getPeople = function () { return _this.$http.get('/api/people').then(_this.success).catch(_this.fail); };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = 'query for people failed. ' + error.data.description;
                    _this.logger.error(msg);
                    return _this.$q.reject(msg);
                };
            }
            DataService.$inject = ['$http', '$q', 'logger'];
            return DataService;
        })();
        core.DataService = DataService;
        angular.module('app.core').service('dataservice', DataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/dataservice.js.map