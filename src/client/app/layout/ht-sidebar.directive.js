var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        angular.module('app.layout').directive('htSidebar', htSidebar);
        function htSidebar() {
            var directive = {
                bindToController: true,
                link: link,
                restrict: 'EA',
                scope: {
                    whenDoneAnimating: '&?'
                }
            };
            return directive;
            function link(scope, element, attrs) {
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
            }
        }
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/layout/ht-sidebar.directive.js.map