import { Routes } from '@angular/router';
import { TodosComponent } from '@modules/todos/presentation/ui/pages/todos/todos.component';

export const routes: Routes = [
    {
        path: '', component: TodosComponent
    }
];
