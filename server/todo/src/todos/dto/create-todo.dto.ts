import { isNotEmpty } from 'class-validator';
import { isBoolean } from 'class-validator/types/decorator/decorators';

export class CreteTodo {
  @isNotEmpty()
  readonly title: string;

  @isNotEmpty()
  @isBoolean()
  readonly done: boolean;
}
