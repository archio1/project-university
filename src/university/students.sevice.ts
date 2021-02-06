import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentsDto } from './dto/createStudents.dto';
import { Students } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Students)
    private readonly studentsModel: typeof Students,
  ) {}

  create(createStudentsDto: CreateStudentsDto): Promise<Students> {
    const students = new Students();
    students.student_id = createStudentsDto.student_id;
    students.student_name = createStudentsDto.student_name;
    students.group_id = createStudentsDto.group_id;

    return students.save();
  }

  async findAll(): Promise<Students[]> {
    return this.studentsModel.findAll();
  }

  findOne(student_id: number): Promise<Students> {
    return this.studentsModel.findOne({
      where: {
        student_id,
      },
    });
  }

  async remove(student_id: number): Promise<void> {
    const students = await this.findOne(student_id);
    await students.destroy();
  }
}