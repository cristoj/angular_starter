import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state = { numProjects: 0, httpError: null };
  private state$ = new BehaviorSubject<any>(this.state);

  constructor() {}

  select$() {
    return this.state$.asObservable();
  }

  dispatch(action: string, payload: any) {
    console.log(action, payload);
    switch (action) {
      case 'setNumProjects':
        this.state.numProjects = payload;
        break;
      case 'httpError':
        this.state.httpError = payload;
        break;
      default:
        break;
    }
    this.state$.next(this.state);
  }
}
