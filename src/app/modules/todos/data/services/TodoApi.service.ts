import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Params } from '@angular/router';
import { TodoModel } from '@modules/todos/domain/models/todo.model';
import { TodoRepository } from '@modules/todos/domain/repositories/todo.repository';
import { Observable, map } from 'rxjs';
import { TodoImplementationRepositoryMapper } from '../mappers/todo-repository.mapper';
import { environment } from 'src/environments/environment.development';


export class TodoApiService extends TodoRepository {

  API_URL = environment.apiUrl;
  todoMapper = new TodoImplementationRepositoryMapper();

  #htpp = inject(HttpClient);

  getAll(params?: Params | undefined): Observable<TodoModel[]> {
    return this.#htpp.get<TodoModel[]>(`${this.API_URL}/todos`, { params })
      .pipe(map((data) => data.map(this.todoMapper.mapFrom)))
  }

}
