"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushService = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
class PushService {
    constructor(fcmServerKey) {
        this.fcmServerKey = fcmServerKey;
    }
    async sendPush(fcmToken, title, body, data) {
        const payload = {
            to: fcmToken,
            notification: { title, body },
            data: data !== null && data !== void 0 ? data : {},
        };
        const res = await (0, node_fetch_1.default)('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `key=${this.fcmServerKey}`,
            },
            body: JSON.stringify(payload),
        });
        return res.json();
    }
}
exports.PushService = PushService;
//# sourceMappingURL=push.services.js.map