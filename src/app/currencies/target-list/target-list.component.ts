import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-begins-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css'],
})
export class TargetListComponent implements OnInit {
  @Input() currencies: any[];
  constructor() {}

  ngOnInit() {}
}
