var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        angular.module('app.layout').controller('ShellController', ShellController);
        ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
        function ShellController($rootScope, $timeout, config, logger) {
            var vm = this;
            vm.busyMessage = 'Please wait ...';
            vm.isBusy = true;
            $rootScope.showSplash = true;
            vm.navline = {
                title: config.appTitle,
                text: 'Created by John Papa',
                link: 'http://twitter.com/john_papa'
            };
            activate();
            function activate() {
                logger.success(config.appTitle + ' loaded!', null);
                hideSplash();
            }
            function hideSplash() {
                $timeout(function () {
                    $rootScope.showSplash = false;
                }, 1000);
            }
        }
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/layout/shell.controller.js.map