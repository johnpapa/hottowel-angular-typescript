declare module app.admin {
    class AdminController {
        private logger;
        title: string;
        static $inject: Array<string>;
        constructor(logger: blocks.logger.Logger);
    }
}
