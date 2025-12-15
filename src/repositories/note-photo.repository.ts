import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotePhoto} from '../models';
import {DbDataSource} from '../datasources';

export class NotePhotoRepository extends DefaultCrudRepository<
  NotePhoto,
  typeof NotePhoto.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(NotePhoto, dataSource);
  }
}
