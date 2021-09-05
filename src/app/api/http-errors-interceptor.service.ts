import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationsService } from '../notifications/notifications.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorsInterceptorService implements HttpInterceptor{

  constructor(@Inject(forwardRef(() => NotificationsService))private notificationsService: NotificationsService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {}, error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 403) {
          this.notificationsService.add(error.message);
        }
      }
    }));
  }
}
