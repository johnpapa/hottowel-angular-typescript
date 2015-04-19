var app;
(function (app) {
    var core;
    (function (_core) {
        'use strict';
        var core = angular.module('app.core');
        core.config(toastrConfig);
        toastrConfig.$inject = ['toastr'];
        function toastrConfig(toastr) {
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
        }
        var config = {
            appErrorPrefix: '[helloworld Error] ',
            appTitle: 'helloworld'
        };
        core.value('config', config);
        core.config(configure);
        configure.$inject = ['$logProvider', 'exceptionHandlerProvider'];
        function configure($logProvider, exceptionHandlerProvider) {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/config.js.map