import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientProviders } from './models/client.provider';
import { AddressModule } from 'src/address/address.module';
import { PersonModule } from 'src/person/person-module';
import { PersonProviders } from 'src/person/models/person.provider';
import { PersonService } from 'src/person/person-service';
import { AddressService } from 'src/address/address.service';
import { AddressProviders } from 'src/address/models/address.provider';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { ContactService } from 'src/contact/contact.service';
import { ContactProviders } from 'src/contact/models/contact.provider';

@Module({
  imports: [DatabaseModule, PersonModule, AddressModule, ContactDetails],
  controllers: [ClientController],
  providers: [ClientService, ...ClientProviders, PersonService, ...PersonProviders, ContactService, ...ContactProviders],
  exports: [ClientService],
})
export class ClientModule {}
