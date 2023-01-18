import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureAboutRoutes } from './lib.routes';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureAboutRoutes)],
  declarations: [AboutComponent],
})
export class FeatureAboutModule {}
