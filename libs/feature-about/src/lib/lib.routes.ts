import { Route } from '@angular/router';
import {AboutComponent} from "./about/about.component";

export const featureAboutRoutes: Route[] = [
 {path: '', pathMatch: 'full', component: AboutComponent}
];
