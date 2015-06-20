var app;
(function (app) {
    'use strict';
    var CoreConfig = (function () {
        function CoreConfig(toastr, $logProvider, exceptionHandlerProvider) {
            var _this = this;
            this.$get = function () {
                _this.config;
            };
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
            this.config = {
                appErrorPrefix: '[helloworld Error] ',
                appTitle: 'helloworld'
            };
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
            exceptionHandlerProvider.configure(this.config.appErrorPrefix);
        }
        CoreConfig.$inject = ['toastr', '$logProvider', 'exceptionHandlerProvider'];
        return CoreConfig;
    })();
    angular
        .module('app.core')
        .provider('CoreConfig', CoreConfig)
        .value('config', function (CoreConfig) { return CoreConfig; });
})(app || (app = {}));
//# sourceMappingURL=config.js.map