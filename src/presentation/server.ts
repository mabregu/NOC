import { CronJob } from 'cron';

export class ServerApp {
    
    static start() {

        console.log('Starting Server App');

        const job = new CronJob(
            '* * * * * *', // cronTime
            () => {
                console.log('You will see this message every second');
            }
        );

        job.start();
    }

}