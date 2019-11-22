import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-begins-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: any[];
  constructor() {}

  ngOnInit() {}
}
