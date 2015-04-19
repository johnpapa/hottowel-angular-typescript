declare module app.layout {
    class HtTopNav implements ng.IDirective {
        static $inject: string[];
        constructor();
        static instance(): ng.IDirective;
        bindToController: boolean;
        controller: TopNavController;
        controllerAs: string;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        restrict: string;
        scope: any;
        templateUrl: string;
    }
    class TopNavController {
        constructor();
    }
}
