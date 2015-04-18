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

//# sourceMappingURL=../../../client/app/dashboard/dashboard.module.js.map