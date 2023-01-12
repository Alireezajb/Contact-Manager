import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Note } from './Note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  notes: Note[] = [
    new Note('About Me', 'This is alireza jaberi  , im a javaScript programmer ( Angular )'),
    new Note('Contact Me', 'alirezajaberi.programming@gmail.com')
  ];


  constructor() {
    this.loadState();

    fromEvent(window, 'storage').subscribe((event: any) => {
      if (event.key === 'notes') this.loadState();
    })

  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);

    this.saveState();
  }

  upDateNote(id: string, updatedFields: Partial<Note>) {
    const note: any = this.getNote(id);
    Object.assign(note, updatedFields);

    this.saveState();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex == -1) return;

    this.notes.splice(noteIndex, 1);

    this.saveState();
  }
  saveState() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState() {

    try {
      const notesInStorage = JSON.parse(localStorage.getItem('notes')!);

      if (!notesInStorage) return;



      this.notes.length = 0;
      // clear the notes array (while keeping the refrence)

      this.notes.push(...notesInStorage);

      // this.notes = notesInStorage;
    }
    catch (errors) {
      console.log('Error Occurs : ', errors);

    }


  }
}
