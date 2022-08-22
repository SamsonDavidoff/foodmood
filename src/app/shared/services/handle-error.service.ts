import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { httpErrors } from "../constants/http-errors.constant";
import { ToastService } from "angular-toastify";

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private toastService: ToastService) {
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = "خطا: " + err.error.message;
    } else {
      // The backend returned unsuccessful response code
      if (httpErrors.hasOwnProperty(err.status)) {
        errorMessage = "خطای " + `${err.status}: ${httpErrors[err.status]}`
      } else {
        errorMessage = "خطایی رخ داده است";
      }
    }

    this.toastService.error(errorMessage);
  }
}
