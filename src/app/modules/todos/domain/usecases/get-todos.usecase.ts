import { inject } from "@angular/core";
import { Params } from "@angular/router";
import { UseCase } from "@base/use-case";
import { Observable } from "rxjs";
import { TodoRepository } from "../repositories/todo.repository";
import { TodoModel } from "../models/todo.model";


export class GetTodosUseCase implements UseCase<Params, TodoModel[]> {

    #todoRepository = inject(TodoRepository);
    execute(params?: Params): Observable<TodoModel[]> {
        return this.#todoRepository.getAll(params);
    }

}