import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { VendorController } from './vendor-controller';
import { VendorService } from './vendor-service';
import { VendorProviders } from './models/vendor.provider';
import { AddressModule } from 'src/address/address.module';
import { PersonModule } from 'src/person/person-module';
import { PersonService } from 'src/person/person-service';
import { PersonProviders } from 'src/person/models/person.provider';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { ContactService } from 'src/contact/contact.service';
import { ContactProviders } from 'src/contact/models/contact.provider';

@Module({
  imports: [DatabaseModule, PersonModule, AddressModule, ContactDetails],
  controllers: [VendorController],
  providers: [
    VendorService,
    ...VendorProviders,
    PersonService,
    ...PersonProviders,
    ContactService,
    ...ContactProviders,
  ],
  exports: [VendorService],
})
export class VendorModule {}
