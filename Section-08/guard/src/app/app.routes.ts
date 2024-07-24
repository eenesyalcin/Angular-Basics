import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { checkGuard } from './check.guard';
// import { auth1Guard } from './auth1.guard';
// import { auth2Guard } from './auth2.guard';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        // canActivateChild: [auth2Guard],
        canActivateChild: [() => inject(AuthService).isAuthenticated()],
        children: [
            {
                path: "",
                canDeactivate: [checkGuard],
                // canActivate: [auth1Guard],
                component: HomeComponent
            }
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }
];
