export interface MatrixEvent {
    /**
     * The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body.
     */
    content: {
        [k: string]: unknown;
    };
    /**
     * The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type'
     */
    type: string;
    [k: string]: unknown;
}
