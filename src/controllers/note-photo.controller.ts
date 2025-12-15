import {post, param, requestBody, response} from '@loopback/rest';
import {repository} from '@loopback/repository';
import {NotePhotoRepository} from '../repositories/note-photo.repository';

export class NotePhotoController {
  constructor(
    @repository(NotePhotoRepository)
    public notePhotoRepo: NotePhotoRepository,
  ) {}

  @post('/notes/{id}/photo')
  @response(200, {
    description: 'Upload a photo for a note',
    content: {'application/json': {schema: {type: 'object'}}},
  })
  async uploadPhoto(
    @param.path.number('id') noteId: number,
    @requestBody({
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
    })
      body: any,
  ) {

    return {success: true, noteId};
  }
}