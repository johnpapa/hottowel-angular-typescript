var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var HtTopNav = (function () {
            function HtTopNav() {
                this.bindToController = true;
                this.controller = TopNavController;
                this.controllerAs = 'vm';
                this.restrict = 'EA';
                this.scope = {
                    'navline': '='
                };
                this.templateUrl = 'app/layout/ht-top-nav.html';
            }
            HtTopNav.instance = function () {
                return new HtTopNav();
            };
            HtTopNav.$inject = [''];
            return HtTopNav;
        })();
        layout.HtTopNav = HtTopNav;
        var TopNavController = (function () {
            function TopNavController() {
            }
            return TopNavController;
        })();
        layout.TopNavController = TopNavController;
        angular.module('app.layout').directive('htTopNav', HtTopNav.instance);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/layout/ht-top-nav.directive.js.map