module app.layout {
    'use strict';

    export class HtTopNav implements ng.IDirective {
        static $inject = [''];
        constructor() { }

        static instance() : ng.IDirective {
            return new HtTopNav();
        }

        public bindToController: boolean = true;
        public controller: TopNavController = TopNavController;
        public controllerAs: string = 'vm';
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public restrict: string = 'EA';
        public scope: any = {
            'navline': '='
        };
        public templateUrl: string = 'app/layout/ht-top-nav.html';
//        public static Factory() {
//            var directive = () => {
//                return new HtTopNav();
//            };
//            directive['$inject'] = [''];
//            return directive;
//        }        
    }

    export class TopNavController {
        constructor() {}
    }

    angular
        .module('app.layout')
        .directive('htTopNav', HtTopNav.instance);
}
