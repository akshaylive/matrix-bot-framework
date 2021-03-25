import sdk from "matrix-js-sdk";
import { Context, ServerContext } from "./";
import { MatrixBotClient } from "../client";
import { config } from "../config";
import { EventHandler } from "../framework/eventHandler";
import { Bot } from "../framework/bot";
import { MatrixEventResponse } from "../model";
import { BasicBot } from "../framework/bots/basicBot";

export interface ContextGenerator<T extends Context> {
    getContext(): T;
}

export class ServerContextGenerator implements ContextGenerator<ServerContext> {
    getContext(): ServerContext {
        const bots: Bot[] = [
            new BasicBot()
        ];
        const matrixClient = sdk.createClient({
            baseUrl: config.matrix.baseUrl,
            userId: config.matrix.userId,
            accessToken: config.matrix.accessToken
        });
        const matrixBotClient = new MatrixBotClient(matrixClient);
        const eventHandler = new EventHandler(bots);
        return { matrixBotClient, eventHandler } as ServerContext;
    }
}
