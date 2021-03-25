export enum MatrixEventType {
    MESSAGE = 'MESSAGE',
    TYPING = 'TYPING',
    MEMBERSHIP = 'MEMBERSHIP',
}

export interface MatrixEvent {
    type: MatrixEventType
}

export interface MatrixEventResponse {

}
