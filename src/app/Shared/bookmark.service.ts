import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Bookmark } from './Bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  // bookmarks!: Bookmark[];
  bookmarks: Bookmark[] = [
    new Bookmark('google', 'http://www.google.com'),
    new Bookmark('wikipedia', 'http://www.wikipedia.org'),
  ];

  constructor() {

    this.loadState();

    fromEvent(window, 'storage').subscribe((event: any) => {
      if (event.key === 'bookmarks') this.loadState();
    })


  }

  getBookmarks() {
    return this.bookmarks
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id === id)

  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
    this.saveState();
  }

  updateBookmark(id: string, updatedFiled: Partial<Bookmark>) {
    const Bookmark: any = this.getBookmark(id);
    Object.assign(Bookmark, updatedFiled);
    this.saveState();

  }

  deletedBookmark(id: string) {
    const Index = this.bookmarks.findIndex(b => b.id === id);

    if (Index === -1) return;

    this.bookmarks.splice(Index, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  loadState() {
    try {

      const bookmarkInStorage = JSON.parse(localStorage.getItem('bookmarks')!, (key, value) => {

        if (key == 'url') return new URL(value);
        return value


      });
      if (!bookmarkInStorage) return;


      this.bookmarks.length = 0; // clear the bookmarks array (while keeping the refrence)

      this.bookmarks.push(...bookmarkInStorage);
    }
    catch (error) {

      console.log('Error Occurs : ', error);
    }
  }
}
