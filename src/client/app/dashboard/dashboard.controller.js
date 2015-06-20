var app;
(function (app) {
    'use strict';
    var DashboardController = (function () {
        function DashboardController($q, dataservice, logger) {
            this.$q = $q;
            this.dataservice = dataservice;
            this.logger = logger;
            this.news = {
                title: 'helloworld',
                description: 'Hot Towel Angular is a SPA template for Angular developers.'
            };
            this.messageCount = 0;
            this.people = [];
            this.title = 'Dashboard';
            var promises = [this.getMessageCount(), this.getPeople()];
            this.$q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
            });
        }
        DashboardController.prototype.getMessageCount = function () {
            var _this = this;
            return this.dataservice.getMessageCount().then(function (data) {
                _this.messageCount = data;
                return _this.messageCount;
            });
        };
        DashboardController.prototype.getPeople = function () {
            var _this = this;
            return this.dataservice.getPeople().then(function (data) {
                _this.people = data;
                return _this.people;
            });
        };
        DashboardController.$inject = ['$q', 'dataservice', 'logger'];
        return DashboardController;
    })();
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
})(app || (app = {}));
//# sourceMappingURL=dashboard.controller.js.map