import { Component, OnInit } from '@angular/core';
import { NotificationItem } from './notificationItem';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {

  notifications: NotificationItem[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.updateEvent
      .subscribe(x => {
        this.notifications = x;
      });
  }

}
