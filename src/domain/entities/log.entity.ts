
export enum LogSeverityLevel {
    // ERROR = 'error',
    // WARNING = 'warning',
    // CRITICAL = 'critical',
    // INFO = 'info',
    // DEBUG = 'debug'
    low = 'low', medium = 'medium', high = 'high'
}

export class LogEntity {

    level: string;
    message: string;
    createdAt: Date;


    constructor(level: LogSeverityLevel, message: string) {
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }

}