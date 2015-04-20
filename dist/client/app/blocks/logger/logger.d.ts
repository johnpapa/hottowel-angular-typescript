declare module blocks.logger {
    interface ILogger {
        info: (message: string, data?: {}, title?: string) => void;
        error: (message: string, data?: {}, title?: string) => void;
        success: (message: string, data?: {}, title?: string) => void;
        warning: (message: string, data?: {}, title?: string) => void;
        log: (...args: any[]) => void;
    }
    class Logger implements ILogger {
        private $log;
        private toastr;
        static $inject: string[];
        constructor($log: ng.ILogService, toastr: Toastr);
        log(...args: any[]): void;
        error(message: string, data?: {}, title?: string): void;
        info(message: string, data?: {}, title?: string): void;
        success(message: string, data?: {}, title?: string): void;
        warning(message: string, data?: {}, title?: string): void;
    }
}
