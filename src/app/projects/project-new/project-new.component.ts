import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-begins-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css'],
})
export class ProjectNewComponent implements OnInit {
  project: any = { name: '', budget: 0 };
  @Output() save = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.save.emit(this.project);
  }
}
