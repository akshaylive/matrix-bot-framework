import { Bot } from "../bot";
import { MatrixEvent } from "../../model";
import { RequestContext, ServerContext } from "../../context";
import { getDomainFromUserId } from "../utils";

export class AutoAcceptBot implements Bot {
    async register(context: ServerContext) { }

    async handle(event: MatrixEvent, context: RequestContext): Promise<void> {
        if (event.type === 'm.room.join_rules' && event.content.join_rule === 'invite') {
            const senderDomain = getDomainFromUserId(event.sender as string);
            const botDomain = getDomainFromUserId(context.serverContext.config.matrix.userId);
            if (!!senderDomain && !!botDomain && senderDomain === botDomain) {
                await context.serverContext.matrixBotClient.matrixClient.joinRoom(event.room_id);
            }
        }
    }
}
