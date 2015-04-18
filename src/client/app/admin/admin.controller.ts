module app.admin {
    'use strict';

    export class AdminController {
        public title = 'Admin';

        static $inject = ['logger'];
        constructor(private logger: blocks.logger.Logger) {
            this.logger.info('Activated Admin View');
        }
    }

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);
}
