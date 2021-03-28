import { Bot } from "../bot";
import { MatrixEvent } from "../../model";
import { RequestContext, ServerContext } from "../../context";
import { getDomainFromUserId } from "../utils";

export class MessageBot implements Bot {
    async register(context: ServerContext) { }

    async handle(event: MatrixEvent, context: RequestContext): Promise<void> {
        if (event.type === 'm.room.message') {
            const sender = event.sender;
            const text = event.content.body as string;
            const roomId = event.room_id as string;

            console.log(`${sender} sent message ${text} in ${roomId}`);
            if (text.startsWith('echo ')) {
                await context.serverContext.matrixBotClient.sendMessage(roomId, text.substr(5));
            }
        }
    }
}
