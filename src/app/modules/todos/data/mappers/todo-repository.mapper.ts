import { Mapper } from "@base/utils/mapper";
import { TodoModel } from "@modules/todos/domain/models/todo.model";
import { TodoEntity } from "../entities/todo-entity";

export class TodoImplementationRepositoryMapper extends Mapper<TodoEntity, TodoModel> {

    mapFrom(param: TodoEntity): TodoModel {
        return {
            id: param.id,
            title: param.title,
            completed: param.completed,
            userId: param.userId
        }
    }

    mapTo(param: TodoModel): TodoEntity {
        return {
            id: param.id,
            title: param.title,
            completed: param.completed,
            userId: param.userId
        }
    }



}