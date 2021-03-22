import { Event, EventResponse } from "../model";

export interface BotInterface {
    /**
     * Register for certain types of expressions.
     */
    register();
    handle(event: Event): Promise<EventResponse | undefined>;
}
