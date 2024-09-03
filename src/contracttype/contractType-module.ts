import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ContractTypeController } from './contractType-controller';
import { ContractTypeService } from './contractType-service';
import { ContractTypeProviders } from './models/contractType.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ContractTypeController],
  providers: [ContractTypeService, ...ContractTypeProviders],
  exports: [ContractTypeService],
})
export class ContractTypeModule {}
