import {Entity, model, property} from '@loopback/repository';

@model()
export class NotePhoto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  noteId: number;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  constructor(data?: Partial<NotePhoto>) {
    super(data);
  }
}

export interface NotePhotoRelations {}

export type NotePhotoWithRelations = NotePhoto & NotePhotoRelations;