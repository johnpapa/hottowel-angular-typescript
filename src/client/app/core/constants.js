/* global toastr:false, moment:false */
/// <reference path="../../../../typings/tsd.d.ts" />
var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core').constant('toastr', toastr).constant('moment', moment);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/core/constants.js.map