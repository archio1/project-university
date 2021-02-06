import { AllowNull, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({createdAt: false, updatedAt: false})
export class Marks extends Model {
    
    
    @PrimaryKey
    @Column
    mark_id: number;

    @AllowNull(false)
    @Column
    student_id: number;

    @Column
    subject: string;

    @Column
    mark: string;

}