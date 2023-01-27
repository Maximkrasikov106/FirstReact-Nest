import { Table } from 'sequelize-typescript';
import { Column } from 'sequelize-typescript/dist/model/column/column';
import { Model } from 'sequelize-typescript/dist/model/model/model';

@Table
export class Todo extends Model {
  @Column
  title: string;

  @Column({ defaultValue: false })
  done: boolean;
}
