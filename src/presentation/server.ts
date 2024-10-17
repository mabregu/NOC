import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';

export class ServerApp {
    
    static start() {

        console.log('Starting Server App');

        CronService.createJob(
            '*/5 * * * * *', // each five seconds
            () => {
                const url = 'http://localhost:3000/posts';
                // new CheckService().execute('http://google.com');
                new CheckService(
                    () => console.log(`Service ${url} is responding`),
                    (error) => console.log(`Check failed: ${error}`),
                ).execute(url);
            }
        )
    }

}