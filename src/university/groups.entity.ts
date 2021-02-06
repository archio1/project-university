import { AllowNull, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Students } from './students.entity';

@Table({createdAt: false, updatedAt: false})
export class Groups extends Model {
    
    @BelongsTo(() => Students)
    students: Students;

    @ForeignKey(() => Students)
    @PrimaryKey
    @Column
    group_id: number;

    @AllowNull(false)
    @Column
    group_name: string;

}