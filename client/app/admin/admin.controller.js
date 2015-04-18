var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        angular.module('app.admin').controller('AdminController', AdminController);
        var AdminController = (function () {
            function AdminController(logger) {
                this.logger = logger;
                this.title = 'Admin';
                this.activate();
            }
            AdminController.prototype.activate = function () {
                this.logger.info('Activated Admin View');
            };
            AdminController.$inject = ['logger'];
            return AdminController;
        })();
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/admin/admin.controller.js.map