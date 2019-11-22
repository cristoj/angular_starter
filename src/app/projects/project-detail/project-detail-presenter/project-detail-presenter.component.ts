import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-begins-project-detail-presenter',
  templateUrl: './project-detail-presenter.component.html',
  styleUrls: ['./project-detail-presenter.component.css']
})
export class ProjectDetailPresenterComponent implements OnInit {
  @Input() project: any;
  @Output() delete = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
