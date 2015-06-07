'use strict';
var AdminRoute = (function () {
    function AdminRoute($stateProvider) {
        this.$stateProvider = $stateProvider;
        this.states = [
            {
                state: 'admin',
                config: {
                    url: '/admin',
                    templateUrl: 'app/admin/admin.html',
                    controller: 'AdminController',
                    controllerAs: 'vm',
                    title: 'Admin',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
        this.configureStates();
    }
    AdminRoute.prototype.$get = function () {
        var _this = this;
        return {
            getStates: function () { return _this.states; }
        };
    };
    AdminRoute.prototype.configureStates = function () {
        var sp = this.$stateProvider;
        this.states.forEach(function (state) {
            sp.state(state.state, state.config);
        });
    };
    AdminRoute.$inject = ['$stateProvider'];
    return AdminRoute;
})();
exports.AdminRoute = AdminRoute;
angular
    .module('app.admin')
    .provider('AdminRoute', AdminRoute)
    .config(function (AdminRouteProvider) {
    //AdminRouteProvider.configureStates();
});
//# sourceMappingURL=admin.route.js.map