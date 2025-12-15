import { DefaultCrudRepository } from '@loopback/repository';
import { NotePhoto } from '../models';
import { DbDataSource } from '../datasources';
export declare class NotePhotoRepository extends DefaultCrudRepository<NotePhoto, typeof NotePhoto.prototype.id> {
    constructor(dataSource: DbDataSource);
}
