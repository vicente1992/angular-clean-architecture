import { Provider } from "@angular/core";
import { TodoRepository } from "../domain/repositories/todo.repository";
import { TodoApiService } from "../data/services/TodoApi.service";

export function providerTodo(): Provider[] {
    return [
        { provide: TodoRepository, useClass: TodoApiService },
    ];
}
