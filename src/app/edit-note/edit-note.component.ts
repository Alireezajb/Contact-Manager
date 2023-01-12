import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../Shared/Note.model';
import { NotificationService } from '../Shared/notification.service';
import { NoteService } from './../Shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note!: Note | any;

  constructor(private active: ActivatedRoute, private noteService: NoteService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.active.params.subscribe(res => {
      const idParam = res['id'];
      this.note = this.noteService.getNote(idParam);
    })

  }
  formSubmit(form: NgForm) {

    if (form.invalid) return alert('Please Add a title');
    this.noteService.upDateNote(this.note.id, form.value);
    this.router.navigate(['/notes']);
    this.notificationService.showMethod('Note  Updated!')

  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigate(['/notes']);
    this.notificationService.showMethod('Note  Deleted!')


  }

}
