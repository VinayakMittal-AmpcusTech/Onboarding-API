import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { startEndOperationsController } from './startendoperations.controller';
import { StartEndOperationsService } from './startendoperations.service';
import { StartEndOperationsProviders } from './models/startendoperations.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [startEndOperationsController],
  providers: [StartEndOperationsService, ...StartEndOperationsProviders],
  exports: [StartEndOperationsService],
})
export class StartEndOperationsModule {}
