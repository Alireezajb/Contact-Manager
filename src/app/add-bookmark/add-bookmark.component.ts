import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from '../Shared/Bookmark.model';
import { BookmarkService } from '../Shared/bookmark.service';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private service: BookmarkService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  formSubmit(form: NgForm) {

    if (form.invalid) return ;
    const bookmark = new Bookmark(form.value.name, form.value.url);
    this.service.addBookmark(bookmark)
    this.router.navigate(['/bookmarks']);
    this.notificationService.showMethod('Bookmark Created!')
  }

}
