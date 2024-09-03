import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './models/user.providers';
import { DatabaseModule } from '../database/database.module';
// import { OrganizationGroupModule } from 'src/organization-group/organization-group.module';
// import { ExamModule } from 'src/exams/exams.module';

@Module({
  imports: [DatabaseModule],
  //  OrganizationGroupModule, ExamModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
