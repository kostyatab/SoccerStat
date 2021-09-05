import { EventEmitter, Injectable } from '@angular/core';
import { NotificationItem } from './notificationItem';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: NotificationItem[] = [];
  updateEvent: EventEmitter<NotificationItem[]> = new EventEmitter<NotificationItem[]>();

  constructor() { }

  add(message: string){
    const model: NotificationItem = {
      message: message
    };

    this.createTimeOut(model);

    this.notifications.push(model);
    this.updateEvent.emit(this.notifications);
  }

  close(item: NotificationItem) {
    this.notifications = this.notifications.filter(x => x !== item);
    this.updateEvent.emit(this.notifications);
  }

  private createTimeOut(model: NotificationItem) {
    setTimeout(() => {
      this.close(model);
    }, environment.notificationDelay);
  }
}
