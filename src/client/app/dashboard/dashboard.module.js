var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular.module('app.dashboard', [
            'app.core',
            'app.widgets'
        ]);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.module.js.map