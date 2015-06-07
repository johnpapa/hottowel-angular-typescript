var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular
            .module('app.core', [
            'ngAnimate', 'ngSanitize',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus'
        ]);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.module.js.map