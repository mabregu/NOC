interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {}

    async execute (url: string): Promise<boolean> {

        try {
            const request = await fetch(url);
            if ( ! request.ok ) {
                throw new Error(`Error on check service ${url}`);
            }

            this.successCallback();

            return true;

        } catch (error) {

            this.errorCallback(`Error on check service ${url}: ${error}`);
            console.log(error);
            

            return false;
        }
    }

}