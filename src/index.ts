import { ServerContextGenerator } from "./context/contextGenerator";
import { ServerContext } from "./context";
import { EventHandler } from "./framework/eventHandler";
import { MatrixEventType } from "./model";

console.log('Hello, world.');

async function start() {
    const contextGenerator = new ServerContextGenerator();
    const serverContext = contextGenerator.getContext() as ServerContext;
    const matrixBotClient = serverContext.matrixBotClient;
    matrixBotClient.addEventListener(serverContext.eventHandler);
    await matrixBotClient.initialize();
}

start();
