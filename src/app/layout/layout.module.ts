import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LegalCreditsComponent } from './legal-credits/legal-credits.component';



@NgModule({
  declarations: [TopBarComponent, LegalCreditsComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [TopBarComponent, LegalCreditsComponent]
})
export class LayoutModule { }
