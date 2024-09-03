import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReferralController } from './referral-controller';
import { ReferralService } from './referral-service';
import { ReferralProviders } from './models/referral.provider';
import { PersonService } from 'src/person/person-service';
import { PersonProviders } from 'src/person/models/person.provider';
import { ContactService } from 'src/contact/contact.service';
import { ContactProviders } from 'src/contact/models/contact.provider';
import { PersonModule } from 'src/person/person-module';
import { AddressModule } from 'src/address/address.module';
import { ContactDetails } from 'src/contact/models/contact-entity';

@Module({
  imports: [DatabaseModule, PersonModule, AddressModule, ContactDetails],
  controllers: [ReferralController],
  providers: [
    ReferralService,
    ...ReferralProviders,
    PersonService,
    ...PersonProviders,
    ContactService,
    ...ContactProviders,
  ],
  exports: [ReferralService],
})
export class ReferralModule {}
