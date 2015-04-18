declare module app.admin {
    class AdminController {
        private logger;
        title: string;
        static $inject: string[];
        constructor(logger: blocks.logger.Logger);
    }
}
