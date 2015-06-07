var applayout;
(function (applayout) {
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
    var TopNavController = (function () {
        function TopNavController() {
        }
        return TopNavController;
    })();
    angular
        .module('app.layout')
        .directive('htTopNav', HtTopNav.instance);
})(applayout || (applayout = {}));
//# sourceMappingURL=ht-top-nav.directive.js.map