import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { todoservice } from './todo.service';
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: todoservice) {}

  @Get()
  getAllTodos() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('content-Type', 'application/json')
  createTodo(@Body() createTodo: createTodo);
}
