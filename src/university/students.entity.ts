import { AllowNull, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table, HasMany } from 'sequelize-typescript';
import { Groups } from './groups.entity';
import { Marks } from './marks.entity';

@Table({createdAt: false, updatedAt: false})
export class Students extends Model {
    @BelongsTo(() => Marks)
    marks: Marks;
    
    @ForeignKey(() => Marks)
    @PrimaryKey
    @Column
    student_id: number;

    @AllowNull(false)
    @Column
    student_name: string;

    //@HasMany(() => Groups)
    //group_id: Groups[];
    @AllowNull(false)
    @Column
    group_id: number;

}