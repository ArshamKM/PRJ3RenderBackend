"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePhoto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let NotePhoto = class NotePhoto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.NotePhoto = NotePhoto;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], NotePhoto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], NotePhoto.prototype, "noteId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], NotePhoto.prototype, "url", void 0);
exports.NotePhoto = NotePhoto = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], NotePhoto);
//# sourceMappingURL=note-photo.model.js.map