import { MatrixEvent } from "../model";
import { RequestContext, ServerContext } from "../context";

export interface Bot {
    /**
     * Register for certain types of expressions.
     * @param context server context
     */
    register(context: ServerContext): Promise<void>;

    /**
     * Handle a matrix event
     * @param event event
     * @param context request context
     */
    handle(event: MatrixEvent, context: RequestContext): Promise<void>;
}
