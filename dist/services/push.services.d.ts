export declare class PushService {
    private fcmServerKey;
    constructor(fcmServerKey: string);
    sendPush(fcmToken: string, title: string, body: string, data?: object): Promise<unknown>;
}
