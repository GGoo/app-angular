import {Routes} from "@angular/router";
import {ServiceComponent} from "./categories/service/service.component";

export const SERVICES_ROUTES: Routes = [
  {path: ':idService', component: ServiceComponent},
];
