import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AddressController } from 'src/address/address.controller';
import { RateRevisionController } from './raterevision.controller';
import { RateRevisionService } from './raterevision.service';
import { RateRevisionProviders } from './models/raterevision.provider';


@Module({
  imports: [DatabaseModule],
  controllers: [RateRevisionController],
  providers: [RateRevisionService, ...RateRevisionProviders],
  exports: [RateRevisionService],
})
export class RateRevisionModule {}