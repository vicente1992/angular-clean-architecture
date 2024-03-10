import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TodoModel } from '@modules/todos/domain/models/todo.model';
import { GetTodosUseCase } from '@modules/todos/domain/usecases/get-todos.usecase';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  providers: [GetTodosUseCase]
})
export default class TodosComponent {
  totalTodos = signal(0)

  #getTodosUseCase = inject(GetTodosUseCase);
  todos$: Observable<TodoModel[]> = this.#getTodosUseCase.execute()
    .pipe(tap((todos) => this.totalTodos.set(todos.length)));

}
