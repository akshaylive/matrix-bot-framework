import { Bot } from "../bot";
import { MatrixEvent, MatrixEventResponse } from "../../model";

export class BasicBot implements Bot {
    async handle(event: MatrixEvent): Promise<MatrixEventResponse | void> {
        console.log(`Event: ${JSON.stringify(event)}`);
    }

    register() {
    }

}
