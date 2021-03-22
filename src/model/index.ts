export enum EventType {
    MESSAGE = 'MESSAGE',
    TYPING = 'TYPING',
    MEMBERSHIP = 'MEMBERSHIP',
}

export interface Event {
    type: EventType
}

export interface EventResponse {

}
