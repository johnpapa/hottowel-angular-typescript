namespace app.layout {
    'use strict';

    interface IHtSidebarScope {
        whenDoneAnimating: string;
    }

    // Opens and closes the sidebar menu.
    // Usage:
    //  <div ht-sidebar">
    //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
    // Creates:
    //  <div ht-sidebar class="sidebar">
    class HtSidebar implements ng.IDirective {
        static $inject: Array<string> = [''];
        constructor() { }

        static instance(): ng.IDirective {
            return new HtSidebar();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        restrict: string = 'EA';
        scope: IHtSidebarScope = {
            whenDoneAnimating: '&?'
        };

        private linkFn(scope: any, element: any, attrs: any) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e: any) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                }
            }
        }
    }

    angular
        .module('app.layout')
        .directive('htSidebar', HtSidebar.instance);
}
