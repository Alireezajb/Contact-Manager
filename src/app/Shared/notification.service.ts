import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { notificationData } from './notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: Subject<notificationData> = new Subject();

  get notifications() {
    return this.notification$.asObservable();
  }

  constructor() { }


  showMethod(text: string, duration: number = 5000) {
    this.notification$.next({ text, duration });
  }
}
