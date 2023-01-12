import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../Shared/Bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookmark!: Bookmark

  tileIconSource!: string

  favIconError!: boolean

  constructor() { }

  ngOnInit(): void {
    this.tileIconSource = this.bookmark.url.origin + '/favicon.ico';
  }


}
