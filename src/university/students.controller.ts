import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStudentsDto } from './dto/createStudents.dto';
import { Students } from './students.entity';
import { StudentsService } from './students.sevice';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentsDto: CreateStudentsDto): Promise<Students> {
    return this.studentsService.create(createStudentsDto);
  }

  @Get()
  findAll(): Promise<Students[]> {
    return this.studentsService.findAll();
  }

  @Get(':student_id')
  findOne(@Param('student_id') student_id: number): Promise<Students> {
    return this.studentsService.findOne(student_id);
  }

  @Delete(':student_id')
  remove(@Param('student_id') student_id: number): Promise<void> {
    return this.studentsService.remove(student_id);
  }
}