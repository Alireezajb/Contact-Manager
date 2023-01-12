import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Shared/notification.service';
import { transition, trigger, style, animate } from '@angular/animations';
import { notificationData } from '../Shared/notification-data.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)',
        }),
        animate('150ms 125ms ease-out')
      ]),
      transition(':leave', [

        animate(125, style({
          opacity: 0,
          transform: 'scale(0.8)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification!: notificationData[] | any;

  notificationTimeout: any

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.notificationService.notifications.subscribe(notification => {
      this.notification = Array(notification);

      clearTimeout(this.notificationTimeout);

      this.notificationTimeout = setTimeout(() => {
        this.notification = null;
      },notification.duration);

    })
  }

}
