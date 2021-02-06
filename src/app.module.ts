import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'chrisbenoit',
      database: 'University',
      autoLoadModels: true,
      synchronize: false,
    }),
    UniversityModule,
  ],
})
export class AppModule {}