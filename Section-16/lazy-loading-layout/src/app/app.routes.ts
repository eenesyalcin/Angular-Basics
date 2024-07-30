import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "login",
        loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule),
        component: LoginComponent
    },
    {
        path: "",
        loadChildren: () => import("./components/layouts/layouts.module").then(m => m.LayoutsModule),
        component: LayoutsComponent
    },
    {
        path: "**",
        loadChildren: () => import("./components/not-found/not-found.module").then(m => m.NotFoundModule),
        component: NotFoundComponent
    }
];
