var app;
(function (app) {
    'use strict';
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var HtWidgetHeader = (function () {
        function HtWidgetHeader() {
            this.scope = {
                'title': '@',
                'subtitle': '@',
                'rightText': '@',
                'allowCollapse': '@'
            };
            this.templateUrl = 'app/widgets/widget-header.html';
            this.restrict = 'EA';
        }
        HtWidgetHeader.instance = function () {
            return new HtWidgetHeader();
        };
        HtWidgetHeader.$inject = [''];
        return HtWidgetHeader;
    })();
    angular
        .module('app.widgets')
        .directive('htWidgetHeader', HtWidgetHeader.instance);
})(app || (app = {}));
//# sourceMappingURL=ht-widget-header.directive.js.map