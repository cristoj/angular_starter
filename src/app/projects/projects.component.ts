import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'a-begins-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$: Observable<any[]>;
  private postSubscriptions: Subscription[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  onSave(newProject: any) {
    const subscriptionToPost = this.projectsService
      .post$(newProject)
      .subscribe({
        next: x => (this.projects$ = this.projectsService.select$()),
        error: e => console.error(e),
        complete: () => console.warn('posted: ' + JSON.stringify(newProject))
      });
    this.postSubscriptions.push(subscriptionToPost);
  }

  getProjects() {
    this.projects$ = this.projectsService.getAll$();
  }

  ngOnDestroy(): void {
    this.postSubscriptions.forEach(s => s.unsubscribe());
  }
}
