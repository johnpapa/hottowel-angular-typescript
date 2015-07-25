namespace app.layout {
    'use strict';

    export class ShellController {
        static $inject: Array<string> = ['$rootScope', '$timeout', 'config', 'logger'];
        constructor(private $rootScope: any,
            private $timeout: ng.ITimeoutService,
            private config: {appTitle: string},
            private logger: blocks.logger.Logger) {
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
}
