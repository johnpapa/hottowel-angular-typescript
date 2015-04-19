module app.core {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize',
            'blocks.exception', 'blocks.logger',
            'ui.router', 'ngplus'
        ]);
}
