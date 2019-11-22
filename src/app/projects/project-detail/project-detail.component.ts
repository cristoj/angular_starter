import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'a-begins-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<any>;
  projectId: string;

  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.params.id;
    this.project$ = this.projectsService.getById$(this.projectId);
  }

  onDelete() {
    this.projectsService.deleteById$(this.projectId).subscribe({
      next: () => this.router.navigate(['projects'])
    });
  }
}
