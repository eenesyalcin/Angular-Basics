import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        children: [
          {
            path: "",
            component: HomeComponent,
            loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
          },
          {
            path: "about",
            component: AboutComponent,
            loadChildren: () => import("../about/about.module").then(m => m.AboutModule)
          }
        ]
      }
    ])
  ]
})
export class LayoutsModule { }
