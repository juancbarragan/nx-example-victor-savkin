import { Route } from '@angular/router';
import {MainComponent} from "./main/main.component";

export const featureMainRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: MainComponent}
];
