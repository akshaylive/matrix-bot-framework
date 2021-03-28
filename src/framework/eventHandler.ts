import { MatrixEventListener } from "../client";
import { Bot } from "./bot";
import { MatrixEvent } from "../model";
import { RequestContext } from "../context";

export class EventHandler implements MatrixEventListener {
    constructor(
        private readonly handlers: Bot[],
    ) {
        console.log(`Registering handlers ${handlers}`);
    }

    public async handle(event: MatrixEvent, context: RequestContext): Promise<void> {
        this.handlers.forEach(handler => handler.handle(event, context));
    }
}
