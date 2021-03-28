import { MatrixBotClient, MatrixEventListener } from "../client";
import { Config } from '../config';

export interface Context { }
export interface ServerContext extends Context {
    eventHandler: MatrixEventListener;
    matrixBotClient: MatrixBotClient;
    config: Config;
}
export interface RequestContext extends Context {
    requestId: string;
    serverContext: ServerContext;
    timestamp: Date;
}
