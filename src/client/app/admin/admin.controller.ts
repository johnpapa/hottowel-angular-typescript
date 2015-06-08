import { ILogger } from '../blocks/logger/logger';

'use strict';

interface IAdminVm {
    title: string;
}
class AdminController implements IAdminVm {
    title: string = 'Admin';

    static $inject: Array<string> = ['logger'];
    constructor(private logger: ILogger) {
        this.logger.info('Activated Admin View');
    }
}

angular
    .module('app.admin')
    .controller('AdminController', AdminController);
