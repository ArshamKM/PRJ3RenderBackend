import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Note, NoteRelations } from '../models';
export declare class NoteRepository extends DefaultCrudRepository<Note, typeof Note.prototype.id, NoteRelations> {
    constructor(dataSource: DbDataSource);
}
