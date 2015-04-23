/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        var AdminController = (function () {
            function AdminController(logger) {
                this.logger = logger;
                this.title = 'Admin';
                this.logger.info('Activated Admin View');
            }
            AdminController.$inject = ['logger'];
            return AdminController;
        })();
        admin.AdminController = AdminController;
        angular.module('app.admin').controller('AdminController', AdminController);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/admin/admin.controller.js.map