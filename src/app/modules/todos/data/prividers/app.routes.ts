import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@modules/todos/presentation/ui/pages/todos/todos.component')
    }

];

export default routes;