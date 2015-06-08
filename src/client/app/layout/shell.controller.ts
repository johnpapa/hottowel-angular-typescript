import { ILogger } from '../blocks/logger/logger';

'use strict';

interface IShellController {
    busyMessage: string;
    isBusy: boolean;
    navline: { title: string, text: string, link: string };
    hideSplash: () => void;
}

class ShellController implements IShellController {
    static $inject: Array<string> = ['$rootScope', '$timeout', 'config', 'logger'];
    constructor(private $rootScope: any,
        private $timeout: ng.ITimeoutService,
        private config: { appTitle: string },
        private logger: ILogger) {
        this.logger.success(config.appTitle + ' loaded!', null);
        this.hideSplash();
        this.$rootScope.showSplash = true;
    }

    busyMessage = 'Please wait ...';
    isBusy = true;
    navline = {
        title: this.config.appTitle,
        text: 'Created by John Papa',
        link: 'http://twitter.com/john_papa'
    };

    hideSplash() {
        //Force a 1 second delay so we can see the splash.
        this.$timeout(() => { this.$rootScope.showSplash = false; }, 1000);
    }
}

angular
    .module('app.layout')
    .controller('ShellController', ShellController);
