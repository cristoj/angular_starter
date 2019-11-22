import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinDirective } from './min-validator.directive';

@NgModule({
  declarations: [MinDirective],
  imports: [CommonModule],
  exports: [MinDirective],
})
export class SharedModule {}
