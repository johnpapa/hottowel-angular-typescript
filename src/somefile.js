var app;
(function (app) {
    'use strict';
    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.admin',
        'app.dashboard',
        'app.layout'
    ]);
})(app || (app = {}));

var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        var AdminController = (function () {
            function AdminController(logger) {
                this.logger = logger;
                this.title = 'Admin';
                this.logger.info('Activated Admin View');
            }
            AdminController.$inject = ['logger'];
            return AdminController;
        })();
        admin.AdminController = AdminController;
        angular.module('app.admin').controller('AdminController', AdminController);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));

var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        angular.module('app.admin', [
            'app.core',
            'app.widgets'
        ]);
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));

var app;
(function (app) {
    var admin;
    (function (admin) {
        'use strict';
        angular.module('app.admin').config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
        }
        function getStates() {
            return [
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
        }
    })(admin = app.admin || (app.admin = {}));
})(app || (app = {}));

var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var config = {
            appErrorPrefix: '[helloworld Error] ',
            appTitle: 'helloworld'
        };
        angular.module('app.core').config(toastrConfig).config(configure).value('config', config);
        toastrConfig.$inject = ['toastr'];
        /* @ngInject */
        function toastrConfig(toastr) {
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
        }
        configure.$inject = ['$logProvider', 'exceptionHandlerProvider'];
        /* @ngInject */
        function configure($logProvider, exceptionHandlerProvider) {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
            exceptionHandlerProvider.configure(config.appErrorPrefix);
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

/* global toastr:false, moment:false */
var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core').constant('toastr', toastr).constant('moment', moment);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        angular.module('app.core', [
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'ngplus'
        ]);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

var app;
(function (app) {
    var core;
    (function (core) {
        // ((): void => {
        // })();
        // What: Creates an IIFE
        // When: Use when you have no TypeScript components to export
        // Less function wrapping
        'use strict';
        angular.module('app.core').config(configureStates).run(appRun);
        appRun.$inject = ['RouterHelper'];
        function appRun(RouterHelper) {
        }
        configureStates.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
        /* @ngInject */
        function configureStates($stateProvider, $locationProvider, $urlRouterProvider) {
            var otherwise = '/404';
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise(otherwise);
        }
        function getStates() {
            return [
                {
                    state: '404',
                    config: {
                        url: '/404',
                        templateUrl: 'app/core/404.html',
                        title: '404'
                    }
                }
            ];
        }
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        var DataService = (function () {
            function DataService($http, $q, exception, logger) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
                this.getMessageCount = function () { return _this.$q.when(72); };
                this.getPeople = function () { return _this.$http.get('/api/people').then(_this.success).catch(_this.fail); };
                this.success = function (response) { return response.data; };
                this.fail = function (error) {
                    var msg = error.data.description;
                    var reason = 'query for people failed.';
                    _this.exception.catcher(msg)(reason);
                    return _this.$q.reject(msg);
                };
            }
            DataService.$inject = ['$http', '$q', 'exception', 'logger'];
            return DataService;
        })();
        core.DataService = DataService;
        angular.module('app.core').service('dataservice', DataService);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        var DashboardController = (function () {
            function DashboardController($q, dataservice, logger) {
                this.$q = $q;
                this.dataservice = dataservice;
                this.logger = logger;
                this.news = {
                    title: 'helloworld',
                    description: 'Hot Towel Angular is a SPA template for Angular developers.'
                };
                this.messageCount = 0;
                this.people = [];
                this.title = 'Dashboard';
                var promises = [this.getMessageCount(), this.getPeople()];
                this.$q.all(promises).then(function () {
                    logger.info('Activated Dashboard View');
                });
            }
            DashboardController.prototype.getMessageCount = function () {
                var _this = this;
                return this.dataservice.getMessageCount().then(function (data) {
                    _this.messageCount = data;
                    return _this.messageCount;
                });
            };
            DashboardController.prototype.getPeople = function () {
                var _this = this;
                return this.dataservice.getPeople().then(function (data) {
                    _this.people = data;
                    return _this.people;
                });
            };
            DashboardController.$inject = ['$q', 'dataservice', 'logger'];
            return DashboardController;
        })();
        dashboard.DashboardController = DashboardController;
        angular.module('app.dashboard').controller('DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular.module('app.dashboard', [
            'app.core',
            'app.widgets'
        ]);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        'use strict';
        angular.module('app.dashboard').config(configureStates);
        configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
            var states = getStates();
            states.forEach(function (state) {
                $stateProvider.state(state.state, state.config);
            });
        }
        function getStates() {
            return [
                {
                    state: 'dashboard',
                    config: {
                        url: '/',
                        templateUrl: 'app/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        title: 'dashboard',
                        settings: {
                            nav: 1,
                            content: '<i class="fa fa-dashboard"></i> Dashboard'
                        }
                    }
                }
            ];
        }
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

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
        angular.module('app.layout').directive('htSidebar', HtSidebar.instance);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

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
    angular.module('app.layout').directive('htTopNav', HtTopNav.instance);
})(applayout || (applayout = {}));

var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        angular.module('app.layout', ['app.core']);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

var app;
(function (app) {
    var layout;
    (function (layout) {
        'use strict';
        var ShellController = (function () {
            function ShellController($rootScope, $timeout, config, logger) {
                this.$rootScope = $rootScope;
                this.$timeout = $timeout;
                this.config = config;
                this.logger = logger;
                this.busyMessage = 'Please wait ...';
                this.isBusy = true;
                this.navline = {
                    title: this.config.appTitle,
                    text: 'Created by John Papa',
                    link: 'http://twitter.com/john_papa'
                };
                this.logger.success(config.appTitle + ' loaded!', null);
                this.hideSplash();
                this.$rootScope.showSplash = true;
            }
            ShellController.prototype.hideSplash = function () {
                var _this = this;
                //Force a 1 second delay so we can see the splash.
                this.$timeout(function () {
                    _this.$rootScope.showSplash = false;
                }, 1000);
            };
            ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
            return ShellController;
        })();
        layout.ShellController = ShellController;
        angular.module('app.layout').controller('ShellController', ShellController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

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
            SidebarController.prototype.getNavRoutes = function () {
                this.navRoutes = this.states.filter(function (state) { return state.settings && state.settings.nav; }).sort(function (state1, state2) { return state1.settings.nav - state2.settings.nav; });
            };
            SidebarController.prototype.isCurrent = function (route) {
                var currentState = this.$state.current;
                if (!route.title || !currentState || !currentState.title) {
                    return '';
                }
                var menuName = route.title;
                return currentState.title.substr(0, menuName.length) === menuName ? 'current' : '';
            };
            SidebarController.$inject = ['$state'];
            return SidebarController;
        })();
        layout.SidebarController = SidebarController;
        angular.module('app.layout').controller('SidebarController', SidebarController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));

var app;
(function (app) {
    var widgets;
    (function (widgets) {
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
        angular.module('app.widgets').directive('htWidgetHeader', HtWidgetHeader.instance);
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));

var app;
(function (app) {
    var widgets;
    (function (widgets) {
        'use strict';
        angular.module('app.widgets', []);
    })(widgets = app.widgets || (app.widgets = {}));
})(app || (app = {}));

// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run
var blocks;
(function (blocks) {
    var exception;
    (function (_exception) {
        'use strict';
        var ExceptionHandlerProvider = (function () {
            function ExceptionHandlerProvider() {
                var _this = this;
                this.config = {
                    appErrorPrefix: undefined
                };
                this.$get = function () {
                    return { config: _this.config };
                };
            }
            ExceptionHandlerProvider.prototype.configure = function (appErrorPrefix) {
                this.config.appErrorPrefix = appErrorPrefix;
            };
            ExceptionHandlerProvider.$inject = [];
            return ExceptionHandlerProvider;
        })();
        _exception.ExceptionHandlerProvider = ExceptionHandlerProvider;
        config.$inject = ['$provide'];
        function config($provide) {
            $provide.decorator('$exceptionHandler', extendExceptionHandler);
        }
        extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
        /**
         * Extend the $exceptionHandler service to also display a toast.
         * @param  {Object} $delegate
         * @param  {Object} exceptionHandler
         * @param  {Object} logger
         * @return {Function} the decorated $exceptionHandler service
         */
        function extendExceptionHandler($delegate, exceptionHandler, logger) {
            return function (exception, cause) {
                //            var appErrorPrefix = '[Error] ';
                var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
                var errorData = { exception: exception, cause: cause };
                exception.message = appErrorPrefix + exception.message;
                $delegate(exception, cause);
                /**
                 * Could add the error to a service's collection,
                 * add errors to $rootScope, log errors to remote web server,
                 * or log locally. Or throw hard. It is entirely up to you.
                 * throw exception;
                 *
                 * @example
                 *     throw { message: 'error message we added' };
                 */
                logger.error(exception.message, errorData);
            };
        }
        angular.module('blocks.exception').provider('exceptionHandler', ExceptionHandlerProvider).config(config);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var exception;
    (function (exception) {
        'use strict';
        angular.module('blocks.exception', ['blocks.logger']);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var exception;
    (function (exception) {
        'use strict';
        var Exception = (function () {
            function Exception(logger) {
                var _this = this;
                this.logger = logger;
                this.catcher = function (message) { return function (reason) { return _this.logger.error(message, reason); }; };
            }
            Exception.$inject = ['logger'];
            return Exception;
        })();
        exception.Exception = Exception;
        angular.module('blocks.exception').service('exception', Exception);
    })(exception = blocks.exception || (blocks.exception = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        'use strict';
        angular.module('blocks.logger', []);
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        'use strict';
        var Logger = (function () {
            function Logger($log, toastr) {
                this.$log = $log;
                this.toastr = toastr;
            }
            // straight to console; bypass toastr
            Logger.prototype.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                this.$log.log(args);
            };
            Logger.prototype.error = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.info = function (message, data, title) {
                this.toastr.info(message, title);
                this.$log.info('Info: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.success = function (message, data, title) {
                this.toastr.success(message, title);
                this.$log.info('Success: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.prototype.warning = function (message, data, title) {
                this.toastr.warning(message, title);
                this.$log.warn('Warning: ' + message, '\nSummary:', title, '\nDetails:', data);
            };
            Logger.$inject = ['$log', 'toastr'];
            return Logger;
        })();
        logger.Logger = Logger;
        angular.module('blocks.logger').service('logger', Logger);
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var router;
    (function (router) {
        'use strict';
        angular.module('blocks.router', []);
    })(router = blocks.router || (blocks.router = {}));
})(blocks || (blocks = {}));

var blocks;
(function (blocks) {
    var router;
    (function (router) {
        'use strict';
        var RouterHelper = (function () {
            function RouterHelper($location, $rootScope, $state, logger) {
                this.$location = $location;
                this.$rootScope = $rootScope;
                this.$state = $state;
                this.logger = logger;
                this.stateCounts = { errors: 0, changes: 0 };
                this.handlingStateChangeError = false;
                this.handleRoutingErrors();
                this.handleStateChanges();
            }
            RouterHelper.prototype.handleRoutingErrors = function () {
                var _this = this;
                //TODO: must inject $state so we can kick off routing
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                this.$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                    if (_this.handlingStateChangeError) {
                        return;
                    }
                    _this.stateCounts.errors++;
                    _this.handlingStateChangeError = true;
                    var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';
                    var msg = 'Error routing to ' + destination + '. ' + (error.data || '') + '. <br/>' + (error.statusText || '') + ': ' + (error.status || '');
                    _this.logger.warning(msg, [toState]);
                    _this.$location.path('/');
                });
            };
            RouterHelper.prototype.handleStateChanges = function () {
                var _this = this;
                this.$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    _this.stateCounts.changes++;
                    _this.handlingStateChangeError = false;
                    //var title = config.docTitle + ' ' + (toState.title || '');
                    var title = (toState.title || '');
                    _this.$rootScope.title = title; // data bind to <title>
                });
            };
            RouterHelper.$inject = ['$location', '$rootScope', '$state', 'logger'];
            return RouterHelper;
        })();
        router.RouterHelper = RouterHelper;
        angular.module('blocks.router').service('RouterHelper', RouterHelper);
    })(router = blocks.router || (blocks.router = {}));
})(blocks || (blocks = {}));

//# sourceMappingURL=somefile.js.map