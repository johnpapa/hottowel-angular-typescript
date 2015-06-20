'use strict';

module app {
    interface IHtTopNavScope {
        navline: string
    }

    class HtTopNav implements ng.IDirective {
        static $inject: Array<string> = [''];
        constructor() { }

        static instance(): ng.IDirective {
            return new HtTopNav();
        }

        bindToController: boolean = true;
        controller: TopNavController = TopNavController;
        controllerAs: string = 'vm';
        restrict: string = 'EA';
        scope: IHtTopNavScope = {
            'navline': '='
        };
        templateUrl: string = 'app/layout/ht-top-nav.html';
    }

    class TopNavController {
        constructor() { }
    }

    angular
        .module('app.layout')
        .directive('htTopNav', HtTopNav.instance);
}