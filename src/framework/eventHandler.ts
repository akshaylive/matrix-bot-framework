import { MatrixBotClient, MatrixBotEventHandler } from "../client";
import { BotInterface } from "./botInterface";
import { EventType, Event } from "../model";

export class EventHandler implements MatrixBotEventHandler {
    constructor(
        private readonly client: MatrixBotClient,
        private readonly handlers: BotInterface[],
    ) {
        console.log(`Registering handlers ${handlers}`);
       client.addEventListener(this);
    }

    public handle(event: Event): void {
        console.log(`Event received: ${event}`);
    }
}
