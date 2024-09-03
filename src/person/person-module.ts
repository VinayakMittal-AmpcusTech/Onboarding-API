import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PersonController } from './person-controller';
import { PersonService } from './person-service';
import { PersonProviders } from './models/person.provider';
import { ClientModule } from 'src/client/client.module';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...PersonProviders],
  exports: [PersonService],
})
export class PersonModule {}
