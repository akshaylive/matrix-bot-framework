import { MatrixEvent, MatrixEventResponse } from "../model";

export interface Bot {
    /**
     * Register for certain types of expressions.
     */
    register();
    handle(event: MatrixEvent): Promise<MatrixEventResponse | void>;
}
