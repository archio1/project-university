import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateGroupsDto } from './dto/createGroups.dto';
import { Groups } from './groups.entity';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupsDto: CreateGroupsDto): Promise<Groups> {
    return this.groupsService.create(createGroupsDto);
  }

  @Get()
  findAll(): Promise<Groups[]> {
    return this.groupsService.findAll();
  }

  @Get(':group_id')
  findOne(@Param('group_id') group_id: number): Promise<Groups> {
    return this.groupsService.findOne(group_id);
  }

  @Delete(':group_id')
  remove(@Param('group_id') group_id: number): Promise<void> {
    return this.groupsService.remove(group_id);
  }
}