var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        angular.module('app.layout').controller('SidebarController', SidebarController);
        SidebarController.$inject = ['$state'];
        function SidebarController($state) {
            var vm = this;
            vm.isCurrent = isCurrent;
            var states = $state.get();
            activate();
            function activate() {
                getNavRoutes();
            }
            function getNavRoutes() {
                vm.navRoutes = states.filter(function (r) {
                    return r.settings && r.settings.nav;
                }).sort(function (r1, r2) {
                    return r1.settings.nav - r2.settings.nav;
                });
            }
            function isCurrent(route) {
                if (!route.title || !$state.current || !$state.current.title) {
                    return '';
                }
                var menuName = route.title;
                return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
            }
        }
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

//# sourceMappingURL=../../../client/app/layout/sidebar.controller.js.map