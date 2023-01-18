import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@happyorg/ui';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
      {
        path: 'feature-about',
        loadChildren: () =>
          import('@happyorg/feature-about').then((m) => m.FeatureAboutModule),
      },
      {
        path: 'feature-main',
        loadChildren: () =>
          import('@happyorg/feature-main').then((m) => m.FeatureMainModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
