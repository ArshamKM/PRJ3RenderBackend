"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Note = class Note extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Note = Note;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        default: '',
    }),
    tslib_1.__metadata("design:type", String)
], Note.prototype, "content", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "longitude", void 0);
exports.Note = Note = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Note);
//# sourceMappingURL=note.model.js.map