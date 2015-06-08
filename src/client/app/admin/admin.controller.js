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
angular
    .module('app.admin')
    .controller('AdminController', AdminController);
//# sourceMappingURL=admin.controller.js.map