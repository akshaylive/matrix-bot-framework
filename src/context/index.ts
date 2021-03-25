import { MatrixBotClient, MatrixEventListener } from "../client";

export interface Context { }
export interface ServerContext extends Context {
    eventHandler: MatrixEventListener;
    matrixBotClient: MatrixBotClient;
}
export interface RequestContext extends ServerContext { }
