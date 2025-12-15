import { NotePhotoRepository } from '../repositories/note-photo.repository';
export declare class NotePhotoController {
    notePhotoRepo: NotePhotoRepository;
    constructor(notePhotoRepo: NotePhotoRepository);
    uploadPhoto(noteId: number, body: any): Promise<{
        success: boolean;
        noteId: number;
    }>;
}
