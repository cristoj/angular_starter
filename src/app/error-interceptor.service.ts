import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StoreService } from './store.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private store: StoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(e => {
        this.store.dispatch('httpError', e);
        throw e;
      })
    );
  }
}
