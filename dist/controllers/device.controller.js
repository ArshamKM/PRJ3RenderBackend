"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const device_repository_1 = require("../repositories/device.repository");
let DeviceController = class DeviceController {
    constructor(deviceRepo) {
        this.deviceRepo = deviceRepo;
    }
    async registerDevice(body) {
        var _a;
        const existing = await this.deviceRepo.findOne({
            where: { userId: body.userId, fcmToken: body.fcmToken },
        });
        if (existing) {
            return existing;
        }
        const created = await this.deviceRepo.create({
            userId: body.userId,
            fcmToken: body.fcmToken,
            platform: (_a = body.platform) !== null && _a !== void 0 ? _a : 'android',
        });
        return created;
    }
};
exports.DeviceController = DeviceController;
tslib_1.__decorate([
    (0, rest_1.post)('/devices/register', {
        responses: {
            '200': {
                description: 'Register device for push notifications',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                id: { type: 'number' },
                                userId: { type: 'string' },
                                fcmToken: { type: 'string' },
                                platform: { type: 'string' },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        description: 'Send the Firebase token for this device',
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    required: ['userId', 'fcmToken'],
                    properties: {
                        userId: { type: 'string' },
                        fcmToken: { type: 'string' },
                        platform: { type: 'string' },
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceController.prototype, "registerDevice", null);
exports.DeviceController = DeviceController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(device_repository_1.DeviceRepository)),
    tslib_1.__metadata("design:paramtypes", [device_repository_1.DeviceRepository])
], DeviceController);
//# sourceMappingURL=device.controller.js.map