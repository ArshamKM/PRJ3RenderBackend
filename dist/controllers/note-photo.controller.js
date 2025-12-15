"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePhotoController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const note_photo_repository_1 = require("../repositories/note-photo.repository");
let NotePhotoController = class NotePhotoController {
    constructor(notePhotoRepo) {
        this.notePhotoRepo = notePhotoRepo;
    }
    async uploadPhoto(noteId, body) {
        return { success: true, noteId };
    }
};
exports.NotePhotoController = NotePhotoController;
tslib_1.__decorate([
    (0, rest_1.post)('/notes/{id}/photo'),
    (0, rest_1.response)(200, {
        description: 'Upload a photo for a note',
        content: { 'application/json': { schema: { type: 'object' } } },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        description: 'Photo as multipart/form-data',
        required: true,
        content: {
            'multipart/form-data': {
                schema: {
                    type: 'object',
                    properties: {
                        file: {
                            type: 'string',
                            format: 'binary',
                        },
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotePhotoController.prototype, "uploadPhoto", null);
exports.NotePhotoController = NotePhotoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(note_photo_repository_1.NotePhotoRepository)),
    tslib_1.__metadata("design:paramtypes", [note_photo_repository_1.NotePhotoRepository])
], NotePhotoController);
//# sourceMappingURL=note-photo.controller.js.map