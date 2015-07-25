namespace app.widgets {
    'use strict';

    interface IHtWidgetHeaderScope {
        title: string;
        subtitle: string;
        rightText: string;
        allowCollapse: string;
    }
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    class HtWidgetHeader implements ng.IDirective {
        static $inject: Array<string> = [''];
        constructor() {}

        static instance(): ng.IDirective {
            return new HtWidgetHeader();
        }

        scope: IHtWidgetHeaderScope = {
            'title': '@',
            'subtitle': '@',
            'rightText': '@',
            'allowCollapse': '@'
        };
        templateUrl: string = 'app/widgets/widget-header.html';
        restrict: string = 'EA';
    }

    angular
        .module('app.widgets')
        .directive('htWidgetHeader', HtWidgetHeader.instance);
}
