var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core').run(appRun);
        appRun.$inject = ['routerHelper'];
        /* @ngInject */
        function appRun(routerHelper) {
            var otherwise = '/404';
            routerHelper.configureStates(getStates(), otherwise);
        }
        function getStates() {
            return [
                {
                    state: '404',
                    config: {
                        url: '/404',
                        templateUrl: 'app/core/404.html',
                        title: '404'
                    }
                }
            ];
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/core.route.js.map