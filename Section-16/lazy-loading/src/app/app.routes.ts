import { RouterModule, Routes } from '@angular/router';
import { C3Component } from './components/c3/c3.component';
// import { C1Component } from './components/c1/c1.component';
// import { C2Component } from './components/c2/c2.component';
// import { C3Component } from './components/c3/c3.component';

export const routes: Routes = [
        // EAGER LOADING
        // {
        //     path: "c1",
        //     component: C1Component
        // },
        // {
        //     path: "c2",
        //     component: C2Component
        // },
        // {
        //     path: "c3",
        //     component: C3Component
        // }





        {
            path: "c1",
            loadChildren: () => import("./components/c1/c1.module").then(m => m.C1Module)
        },
        {
            path: "c2",
            loadChildren: () => import("./components/c2/c2.module").then(m => m.C2Module)
        },
        {
            component: C3Component,
            path: "c3",
            loadChildren: () => import("./components/c3/c3.module").then(m => m.C3Module)
        }
];
