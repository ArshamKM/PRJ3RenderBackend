"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NoteController = class NoteController {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    async create(note) {
        return this.noteRepository.create(note);
    }
    async count(where) {
        return this.noteRepository.count(where);
    }
    async find(filter) {
        return this.noteRepository.find(filter);
    }
    async updateAll(note, where) {
        return this.noteRepository.updateAll(note, where);
    }
    async findById(id, filter) {
        return this.noteRepository.findById(id, filter);
    }
    async updateById(id, note) {
        await this.noteRepository.updateById(id, note);
    }
    async replaceById(id, note) {
        await this.noteRepository.replaceById(id, note);
    }
    async deleteById(id) {
        await this.noteRepository.deleteById(id);
    }
};
exports.NoteController = NoteController;
tslib_1.__decorate([
    (0, rest_1.post)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Note model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Note) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, {
                    title: 'NewNote',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notes/count'),
    (0, rest_1.response)(200, {
        description: 'Note model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Note)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Array of Note model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Note, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Note)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Note PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Note)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Note, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Note model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Note, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Note]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Note]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], NoteController.prototype, "deleteById", null);
exports.NoteController = NoteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.NoteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.NoteRepository])
], NoteController);
//# sourceMappingURL=note.controller.js.map