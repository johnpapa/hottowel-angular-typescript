/* global toastr:false, moment:false */

namespace app.core {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
}
