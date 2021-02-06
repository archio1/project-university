import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMarksDto } from './dto/createMarks.dto';
import { Marks } from './marks.entity';

@Injectable()
export class MarksService {
  constructor(
    @InjectModel(Marks)
    private readonly marksModel: typeof Marks,
  ) {}

  create(createMarksDto: CreateMarksDto): Promise<Marks> {
    const mark = new Marks();
    mark.mark_id = createMarksDto.mark_id;
    mark.student_id = createMarksDto.student_id;
    mark.subject = createMarksDto.subject;
    mark.mark = createMarksDto.mark;

    return mark.save();
  }

  async findAll(): Promise<Marks[]> {
    return this.marksModel.findAll();
  }

  findOne(mark_id: number): Promise<Marks> {
    return this.marksModel.findOne({
      where: {
        mark_id,
      },
    });
  }

  async remove(mark_id: number): Promise<void> {
    const mark = await this.findOne(mark_id);
    await mark.destroy();
  }
}