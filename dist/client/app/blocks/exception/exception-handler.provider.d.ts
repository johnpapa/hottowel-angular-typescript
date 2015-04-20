declare module blocks.exception {
    interface IExceptionHandlerConfig {
        appErrorPrefix: string;
    }
    class ExceptionHandlerProvider {
        static $inject: Array<string>;
        constructor();
        config: IExceptionHandlerConfig;
        configure(appErrorPrefix: any): void;
        $get: () => {
            config: IExceptionHandlerConfig;
        };
    }
}
