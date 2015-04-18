module app.admin {    
    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    class AdminController {
        public title = 'Admin';
        
        static $inject = ['logger'];
        constructor(private logger) {
            this.activate();
        }

        private activate() {
            this.logger.info('Activated Admin View');
        }
    }
}
