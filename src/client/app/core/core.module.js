var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core', [
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'ui.router',
            'ngplus'
        ]);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/core.module.js.map