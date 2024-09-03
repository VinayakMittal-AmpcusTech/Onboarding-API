import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AddressController } from 'src/address/address.controller';
import { AddressService } from './address.service';
import { AddressProviders } from './models/address.provider';
import { ClientService } from 'src/client/client.service';
import { ClientProviders } from 'src/client/models/client.provider';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [AddressService, ...AddressProviders],
  exports: [AddressService],
})
export class AddressModule {}
