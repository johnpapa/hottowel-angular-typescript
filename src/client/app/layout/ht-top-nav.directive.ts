module applayout {
    'use strict';

    interface IHtTopNavScope {
        navline: string
    }

    class HtTopNav implements ng.IDirective {
        static $inject: Array<string> = [''];
        constructor() { }

        static instance() : ng.IDirective {
            return new HtTopNav();
        }

        public bindToController: boolean = true;
        public controller: TopNavController = TopNavController;
        public controllerAs: string = 'vm';
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public restrict: string = 'EA';
        public scope: IHtTopNavScope = {
            'navline': '='
        };
        public templateUrl: string = 'app/layout/ht-top-nav.html';
    }

    class TopNavController {
        constructor() {}
    }

    angular
        .module('app.layout')
        .directive('htTopNav', HtTopNav.instance);
}
