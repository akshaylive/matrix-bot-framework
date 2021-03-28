import sdk from "matrix-js-sdk";
import { Context, ServerContext, RequestContext } from "./";
import { MatrixBotClient } from "../client";
import { config } from "../config";
import { EventHandler } from "../framework/eventHandler";
import { Bot } from "../framework/bot";
import { AutoAcceptBot } from "../framework/bots/autoAcceptBot";
import { v4 } from "uuid";
import { MessageBot } from "../framework/bots/messageBot";

export interface ContextGenerator<T extends Context> {
    getContext(): T;
}

export class ServerContextGenerator implements ContextGenerator<ServerContext> {
    getContext(): ServerContext {
        const bots: Bot[] = [
            new AutoAcceptBot(),
            new MessageBot(),
        ];
        const matrixClient = sdk.createClient({
            baseUrl: config.matrix.baseUrl,
            userId: config.matrix.userId,
            accessToken: config.matrix.accessToken
        });
        const eventHandler = new EventHandler(bots);
        const serverContext = { eventHandler, matrixBotClient: undefined, config } as ServerContext;
        const requestContextGenerator = new RequestContextGenerator(serverContext);
        const matrixBotClient = new MatrixBotClient(matrixClient, requestContextGenerator);
        serverContext.matrixBotClient = matrixBotClient;
        return serverContext;
    }
}
export class RequestContextGenerator implements ContextGenerator<RequestContext> {
    constructor(private readonly serverContext: ServerContext) { }

    getContext(): RequestContext {
        return {
            requestId: v4(),
            serverContext: this.serverContext,
            timestamp: new Date(),
        };
    }
}
