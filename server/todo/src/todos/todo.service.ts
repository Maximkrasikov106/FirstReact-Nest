import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { ChangeTodo } from './dto/change-todo.dto';
import { Todo } from './models/todo.module';
@Injectable()
export class todoservice {
  constructor(
    @InjectModel(Todo)
    private todoModule: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModule.findAll();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoModule.findOne({
      where: {
        id,
      },
    });
  }
  create(createTodo: createTodo): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodo.title;
    todo.done = createTodo.done;

    return todo.save();
  }

  update(
    id: string,
    changeTodo: ChangeTodo,
  ): Promise<[affectedCount: number, affectedRows: Todo[]]> {
    return this.todoModule.update(
      { ...changeTodo },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
  }
  async remove(id: string): Promise<void> {
    const todo = await this.findOne(id);
    await todo.destroy();
  }
}
