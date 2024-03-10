import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@modules/todos/data/prividers/app.routes'),
    },
    { path: '**', redirectTo: '' },


];
