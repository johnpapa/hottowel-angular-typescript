module app.dashboard {
    'use strict';

    export class DashboardController {
        public news = {
            title: 'helloworld',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        public messageCount: number = 0;
        public people: Array<any> = [];
        public title: string = 'Dashboard';

        static $inject = ['$q', 'dataservice', 'logger'];
        constructor(private $q: ng.IQService,
            private dataservice: any,
            private logger: blocks.logger.Logger) {
            var promises = [this.getMessageCount(), this.getPeople()];
            this.$q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
            });
        }

        getMessageCount() {
            return this.dataservice.getMessageCount().then((data) => {
                this.messageCount = data;
                return this.messageCount;
            });
        }

        getPeople() {
            return this.dataservice.getPeople().then((data) => {
                this.people = data;
                return this.people;
            });
        }
    }

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
