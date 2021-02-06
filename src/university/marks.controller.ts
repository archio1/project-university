import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMarksDto } from './dto/createMarks.dto';
import { Marks } from './marks.entity';
import { MarksService } from './marks.service';

@Controller('marks')
export class MarksController {
  constructor(private readonly marksService: MarksService) {}

  @Post()
  create(@Body() createMarksDto: CreateMarksDto): Promise<Marks> {
    return this.marksService.create(createMarksDto);
  }

  @Get()
  findAll(): Promise<Marks[]> {
    return this.marksService.findAll();
  }

  @Get(':mark_id')
  findOne(@Param('mark_id') mark_id: number): Promise<Marks> {
    return this.marksService.findOne(mark_id);
  }

  @Delete(':mark_id')
  remove(@Param('mark_id') mark_id: number): Promise<void> {
    return this.marksService.remove(mark_id);
  }
}