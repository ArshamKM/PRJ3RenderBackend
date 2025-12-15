import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Note extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: false,
    default: '',
  })
  content?: string;

  @property({
    type: 'number',
    required: false,
  })
  latitude?: number;

  @property({
    type: 'number',
    required: false,
  })
  longitude?: number;

  [prop: string]: any;

  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
}

export type NoteWithRelations = Note & NoteRelations;
