// TODO: set up config for all magic variables.
// Set up matrix client here
import { MatrixClient } from "matrix-js-sdk/src/client";
import { MatrixEvent } from "../model";


export interface MatrixEventListener {
    handle(event: MatrixEvent): Promise<void>;
}

/*
* Handles networking abstractions on Matrix client.
*/
export class MatrixBotClient {
    constructor(private readonly delegate: MatrixClient) {
    }

    public addEventListener(handler: MatrixEventListener): void {
        this.delegate.on('event', (rawEvent) => {
            try {
                const event = this.convertRawEventToMatrixEvent(rawEvent);
                handler.handle(event);
            } catch (error) {
                console.log('Something went wrong while handling event', rawEvent, error);
            }
        });
    }

    public async initialize() {
        await this.delegate.startClient({initialSyncLimit: 10});
    }

    private convertRawEventToMatrixEvent(rawEvent: any): MatrixEvent {
        // Ideally we just use the schemas generated by json-schema-to-typescript
        return rawEvent as MatrixEvent;
    }
}
