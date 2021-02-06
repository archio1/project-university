import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupsDto } from './dto/createGroups.dto';
import { Groups } from './groups.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups)
    private readonly groupsModel: typeof Groups,
  ) {}

  create(createGroupsDto: CreateGroupsDto): Promise<Groups> {
    const groups = new Groups();
    groups.group_id = createGroupsDto.group_id;
    groups.group_name = createGroupsDto.group_name;
    

    return groups.save();
  }

  async findAll(): Promise<Groups[]> {
    return this.groupsModel.findAll();
  }

  findOne(group_id: number): Promise<Groups> {
    return this.groupsModel.findOne({
      where: {
        group_id,
      },
    });
  }

  async remove(group_id: number): Promise<void> {
    const groups = await this.findOne(group_id);
    await groups.destroy();
  }
}