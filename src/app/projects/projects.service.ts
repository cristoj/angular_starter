import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = 'https://api-base.herokuapp.com/api/pub/projects';

  private projects: any[] = [];
  private projects$: BehaviorSubject<any[]> = new BehaviorSubject(
    this.projects
  );

  constructor(private httpClient: HttpClient, private store: StoreService) {}

  select$() {
    return this.projects$.asObservable();
  }

  getAll$(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      tap(res => {
        this.projects = res || [];
        this.projects$.next(this.projects);
        this.store.dispatch('setNumProjects', this.projects.length);
      })
    );
  }

  getById$(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<any>(url);
  }

  post$(project: any) {
    return this.httpClient.post<any>(this.url, project).pipe(
      tap(res => {
        this.projects.push(res);
        this.projects$.next(this.projects);
        this.count$().subscribe();
      })
    );
  }

  deleteById$(projectId: string) {
    const url = `${this.url}/${projectId}`;
    return this.httpClient
      .delete<any>(url)
      .pipe(tap(res => this.count$().subscribe()));
  }

  count$() {
    const url = `${this.url}/count`;
    return this.httpClient
      .get<any>(url)
      .pipe(tap(res => this.store.dispatch('setNumProjects', res.count)));
  }
}
