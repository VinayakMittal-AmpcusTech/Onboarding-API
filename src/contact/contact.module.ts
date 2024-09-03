import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactProviders } from './models/contact.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [ContactService, ...ContactProviders],
  exports: [ContactService],
})
export class ContactModule {}
