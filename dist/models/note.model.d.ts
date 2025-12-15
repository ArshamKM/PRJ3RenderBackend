import { Entity } from '@loopback/repository';
export declare class Note extends Entity {
    id?: number;
    title: string;
    content?: string;
    latitude?: number;
    longitude?: number;
    [prop: string]: any;
    constructor(data?: Partial<Note>);
}
export interface NoteRelations {
}
export type NoteWithRelations = Note & NoteRelations;
