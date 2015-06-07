var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var ShellController = (function () {
            function ShellController($rootScope, $timeout, config, logger) {
                this.$rootScope = $rootScope;
                this.$timeout = $timeout;
                this.config = config;
                this.logger = logger;
                this.busyMessage = 'Please wait ...';
                this.isBusy = true;
                this.navline = {
                    title: this.config.appTitle,
                    text: 'Created by John Papa',
                    link: 'http://twitter.com/john_papa'
                };
                this.logger.success(config.appTitle + ' loaded!', null);
                this.hideSplash();
                this.$rootScope.showSplash = true;
            }
            ShellController.prototype.hideSplash = function () {
                var _this = this;
                //Force a 1 second delay so we can see the splash.
                this.$timeout(function () { _this.$rootScope.showSplash = false; }, 1000);
            };
            ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
            return ShellController;
        })();
        layout.ShellController = ShellController;
        angular
            .module('app.layout')
            .controller('ShellController', ShellController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=shell.controller.js.map