import { ServerApp } from "./presentation/server";


(() => {
    try {
        main();
    } catch (error) {
        console.error("An error occurred while starting the server:", error);
    }
})();

function main() {
    ServerApp.start();
}