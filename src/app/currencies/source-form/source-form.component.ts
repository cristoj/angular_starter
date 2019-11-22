import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'a-begins-source-form',
  templateUrl: './source-form.component.html',
  styleUrls: ['./source-form.component.css'],
})
export class SourceFormComponent implements OnInit {
  sourceAmount = 1;
  @Output() convert = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  emitConvert() {
    this.convert.next(this.sourceAmount);
  }
}
