import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../Shared/bookmark.service';
import { Bookmark } from './../Shared/Bookmark.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {



  public Bookmarks!: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.Bookmarks = this.bookmarkService.getBookmarks();
  }

}
