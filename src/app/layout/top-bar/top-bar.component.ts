import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'a-begins-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() title = '';
  @Input() numProjects: any;
  constructor() {

  }

  ngOnInit() {}
}
