var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        function htWidgetHeader() {
            var directive = {
                scope: {
                    'title': '@',
                    'subtitle': '@',
                    'rightText': '@',
                    'allowCollapse': '@'
                },
                templateUrl: 'app/widgets/widget-header.html',
                restrict: 'EA'
            };
            return directive;
        }
        angular.module('app.widgets').directive('htWidgetHeader', htWidgetHeader);
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/widgets/ht-widget-header.directive.js.map