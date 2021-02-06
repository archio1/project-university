import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Groups } from './groups.entity';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller'
import { MarksController } from './marks.controller';
import { Marks } from './marks.entity';
import { MarksService } from './marks.service';
import { StudentsController } from './students.controller';
import { Students } from './students.entity';
import { StudentsService } from './students.sevice';


@Module({
  imports: [SequelizeModule.forFeature([Groups, Students, Marks])],
  providers: [GroupsService, StudentsService, MarksService],
  controllers: [GroupsController, StudentsController, MarksController],
})
export class UniversityModule {}