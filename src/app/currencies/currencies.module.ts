import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies.component';
import { SourceFormComponent } from './source-form/source-form.component';
import { TargetListComponent } from './target-list/target-list.component';

@NgModule({
  declarations: [CurrenciesComponent, SourceFormComponent, TargetListComponent],
  imports: [CommonModule, CurrenciesRoutingModule, FormsModule],
})
export class CurrenciesModule {}
