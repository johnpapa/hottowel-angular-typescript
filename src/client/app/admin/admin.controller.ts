import { Logger } from '../blocks/logger/logger';

'use strict';

export interface IAdminVm {
    title: string;
}
export class AdminController implements IAdminVm {
    title: string = 'Admin';

    static $inject: Array<string> = ['logger'];
    constructor(private logger: Logger) {
        this.logger.info('Activated Admin View');
    }
}

angular
    .module('app.admin')
    .controller('AdminController', AdminController);
