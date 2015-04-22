/// <reference path="../../../../typings/tsd.d.ts" />

module app.admin {
    'use strict';

    export class AdminController {
        title: string = 'Admin';

        static $inject: Array<string> = ['logger'];
        constructor(private logger: blocks.logger.Logger) {
            this.logger.info('Activated Admin View');
        }
    }

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);
}
