import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';

export class ServerApp {
    
    static start() {

        console.log('Starting Server App');

        CronService.createJob(
            '*/5 * * * * *', // each five seconds
            () => {
                new CheckService().execute('http://google.com');
            }
        )
    }

}