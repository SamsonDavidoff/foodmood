import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoreRoutes } from "@core/core-routes.constant";
import { HomePageComponent } from "@core/pages/home-page/home-page.component";
import { AboutPageComponent } from "@core/pages/about-page/about-page.component";
import { NotfoundPageComponent } from "@core/pages/notfound-page/notfound-page.component";

const routes: Routes = [
  {
    path: CoreRoutes.HOME,
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: CoreRoutes.STUDENTS,
    loadChildren: () => import('@features/student/student-routing.module').then(m => m.StudentRoutingModule),
  },
  {
    path: CoreRoutes.ABOUT,
    component: AboutPageComponent
  },
  {
    path: CoreRoutes.WILDCARD,
    component: NotfoundPageComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
