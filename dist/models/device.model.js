"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Device = class Device extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Device = Device;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Device.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "fcmToken", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "platform", void 0);
exports.Device = Device = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Device);
//# sourceMappingURL=device.model.js.map