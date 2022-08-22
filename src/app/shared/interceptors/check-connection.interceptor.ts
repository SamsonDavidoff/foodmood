import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { ToastService } from "angular-toastify";

@Injectable()
export class CheckConnectionInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>> {

    if (window.navigator.onLine) {
      return next.handle(request);
    }

    this.toastService.error('دیوایس شما به اینترنت متصل نیست');
    return EMPTY;
  }
}
