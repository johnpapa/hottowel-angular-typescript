var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div ht-sidebar">
        //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div ht-sidebar class="sidebar">
        var HtSidebar = (function () {
            function HtSidebar() {
                this.bindToController = true;
                this.link = this.linkFn;
                this.restrict = 'EA';
                this.scope = {
                    whenDoneAnimating: '&?'
                };
            }
            HtSidebar.instance = function () {
                return new HtSidebar();
            };
            HtSidebar.prototype.linkFn = function (scope, element, attrs) {
                var $sidebarInner = element.find('.sidebar-inner');
                var $dropdownElement = element.find('.sidebar-dropdown a');
                element.addClass('sidebar');
                $dropdownElement.click(dropdown);
                function dropdown(e) {
                    var dropClass = 'dropy';
                    e.preventDefault();
                    if (!$dropdownElement.hasClass(dropClass)) {
                        $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                        $dropdownElement.addClass(dropClass);
                    }
                    else if ($dropdownElement.hasClass(dropClass)) {
                        $dropdownElement.removeClass(dropClass);
                        $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                    }
                }
            };
            HtSidebar.$inject = [''];
            return HtSidebar;
        })();
        angular
            .module('app.layout')
            .directive('htSidebar', HtSidebar.instance);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=ht-sidebar.directive.js.map