/* global toastr:false, moment:false */

module app.core {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
}
