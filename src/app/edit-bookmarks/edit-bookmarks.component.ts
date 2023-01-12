import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from '../Shared/Bookmark.model';
import { BookmarkService } from './../Shared/bookmark.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from './../Shared/notification.service';

@Component({
  selector: 'app-edit-bookmarks',
  templateUrl: './edit-bookmarks.component.html',
  styleUrls: ['./edit-bookmarks.component.scss']
})
export class EditBookmarksComponent implements OnInit {

  bookmark!: Bookmark | any;

  constructor(private BookmarkService: BookmarkService, private activeRoute: ActivatedRoute, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p => {
      const bookmarkId = p['id']

      this.bookmark = this.BookmarkService.getBookmark(bookmarkId);

    })

  }
  formSubmit(form: NgForm) {
    if (form.invalid) return alert('Please Add a title');

    const { name, url } = form.value;

    this.BookmarkService.updateBookmark(this.bookmark.id, { name, url: new URL(url) });
    // this.router.navigate(['/bookmarks']);

    this.notificationService.showMethod('Bookmark  updated!')
  }

  deleteBookmark() {
    this.BookmarkService.deletedBookmark(this.bookmark.id);
    this.router.navigate(['/bookmarks']);
    this.notificationService.showMethod('Bookmark  Deleted!')


  }

}
