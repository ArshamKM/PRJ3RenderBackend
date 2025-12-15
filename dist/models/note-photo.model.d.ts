import { Entity } from '@loopback/repository';
export declare class NotePhoto extends Entity {
    id?: number;
    noteId: number;
    url: string;
    constructor(data?: Partial<NotePhoto>);
}
export interface NotePhotoRelations {
}
export type NotePhotoWithRelations = NotePhoto & NotePhotoRelations;
