import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureMainRoutes } from './lib.routes';
import { MainComponent } from './main/main.component';
import {UiModule} from "@happyorg/ui";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureMainRoutes), UiModule],
  declarations: [MainComponent],
})
export class FeatureMainModule {}
