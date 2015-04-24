var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var SidebarController = (function () {
            function SidebarController($state) {
                this.$state = $state;
                this.states = this.$state.get();
                this.getNavRoutes();
            }
            SidebarController.prototype.isCurrent = function (route) {
                var currentState = this.$state.current;
                if (!route.title || !currentState || !currentState.title) {
                    return '';
                }
                var menuName = route.title;
                return currentState.title.substr(0, menuName.length) === menuName ? 'current' : '';
            };
            SidebarController.prototype.getNavRoutes = function () {
                this.navRoutes = this.states
                    .filter(function (state) { return state.settings && state.settings.nav; })
                    .sort(function (state1, state2) { return state1.settings.nav - state2.settings.nav; });
            };
            SidebarController.$inject = ['$state'];
            return SidebarController;
        })();
        layout.SidebarController = SidebarController;
        angular
            .module('app.layout')
            .controller('SidebarController', SidebarController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
//# sourceMappingURL=sidebar.controller.js.map