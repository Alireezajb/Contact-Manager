import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../Shared/Note.model';
import { NoteService } from '../Shared/note.service';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})

export class AddNotesComponent implements OnInit {

  constructor(private service: NoteService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
    
  }

  formSubmit(form: NgForm) {

    if (form.invalid) return alert ('Please Add a title');
    const note = new Note(form.value.title, form.value.Content);
    this.service.addNote(note);
    this.router.navigate(['/notes']);
    this.notificationService.showMethod('Note Created!')

  }

}
