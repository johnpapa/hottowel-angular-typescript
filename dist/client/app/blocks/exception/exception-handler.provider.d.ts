declare module blocks.exception {
    interface IExceptionHandlerConfig {
        appErrorPrefix: string;
    }
    class ExceptionHandlerProvider {
        static $inject: any[];
        constructor();
        config: IExceptionHandlerConfig;
        configure(appErrorPrefix: any): void;
        $get: () => {
            config: IExceptionHandlerConfig;
        };
    }
}
