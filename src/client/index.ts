// TODO: set up config for all magic variables.
// Set up matrix client here
import { MatrixClient } from "matrix-js-sdk/src/client";
import { EventType, Event } from "../model";

const EVENT_TYPE_MAPPING: {
    [eventType in EventType]: string;
} = {
    [EventType.MESSAGE]: 'Room.timeline',
    [EventType.TYPING]: 'Room.typing',
    [EventType.MEMBERSHIP]: 'Room.membership'
}

export interface MatrixBotEventHandler {
    handle(event: Event): void;
}

/*
* Handles networking abstractions on Matrix client.
*/
export class MatrixBotClient {
    constructor(private readonly delegate: MatrixClient) { }

    public addEventListener(eventType: EventType, handler: MatrixBotEventHandler): void;
    public addEventListener(handler: MatrixBotEventHandler): void;
    public addEventListener(eventTypeOrHandler: any, handler?: any): void {
        if (!handler) {
            this.delegate.on('event', (event) => eventTypeOrHandler.handle(event));
        } else {
            // TODO: store handlers so that listeners can be removed at will.
            this.delegate.on(EVENT_TYPE_MAPPING[eventTypeOrHandler], (event) => handler.handle(event));
        }
    }

    public async initialize() {
        await this.delegate.startClient({ initialSyncLimit: 10 });
    }
}
