/* global toastr:false, moment:false */
/// <reference path="../../../../typings/tsd.d.ts" />

module app.core {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
}
