import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { JobController } from './job-controller';
import { JobService } from './job-service';
import { JobProviders } from './models/job.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [JobService, ...JobProviders],
  exports: [JobService],
})
export class JobModule {}
