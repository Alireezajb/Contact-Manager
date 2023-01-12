import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../Shared/Bookmark.model';
import { BookmarkService } from '../Shared/bookmark.service';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit {

  bookmarks!: Bookmark[]

  constructor(private BookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.BookmarkService.getBookmarks();
  }

}
