import { Params } from "@angular/router";
import { Observable } from "rxjs";
import { TodoModel } from "../models/todo.model";

export abstract class TodoRepository {

    abstract getAll(params?: Params): Observable<TodoModel[]>;
}