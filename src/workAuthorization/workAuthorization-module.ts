import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { WorkAuthorizationController } from './workAuthorization-controller';
import { WorkAuthorizationService } from './workAuthorization-service';
import { WorkAuthorizationProviders } from './models/workAuthorization.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkAuthorizationController],
  providers: [WorkAuthorizationService, ...WorkAuthorizationProviders],
  exports: [WorkAuthorizationService],
})
export class WorkAuthorizationModule {}
