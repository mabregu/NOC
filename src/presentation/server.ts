import { CronService } from './cron/cron-service';

export class ServerApp {
    
    static start() {

        console.log('Starting Server App');

        CronService.createJob(
            '*/5 * * * * *', // each five seconds
            () => {
                const date = new Date();
                console.log(`Cron job executed. ${date.toISOString()}`);
            }
        )
    }

}