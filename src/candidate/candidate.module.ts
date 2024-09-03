import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CandidateService } from './candidate.service';
import { CandidateProviders } from './models/candidate.provider';
import { CandidateController } from './candidate.controller';
import { BackGround_Check_service } from 'src/BackgroundCheck/backgroundCheck.service';
import { BackgroundCheckProvider } from 'src/BackgroundCheck/models/backgroundCheck.provider';
import { AddressModule } from 'src/address/address.module';
import { RateRevisionService } from 'src/raterevision/raterevision.service';
import { RateRevisionProviders } from 'src/raterevision/models/raterevision.provider';
import { StartEndOperationsService } from 'src/startendoperations/startendoperations.service';
import { StartEndOperationsProviders } from 'src/startendoperations/models/startendoperations.provider';
import { DocumentationService } from 'src/documentation/documentation.service';
import { DocumentationProvider } from 'src/documentation/models/documentation.provider';
import { ClientModule } from 'src/client/client.module';
import { VendorService } from 'src/vendor/vendor-service';
import { VendorProviders } from 'src/vendor/models/vendor.provider';
import { ReferralService } from 'src/referral/referral-service';
import { ReferralProviders } from 'src/referral/models/referral.provider';
import { WorkAuthorizationModule } from 'src/workAuthorization/workAuthorization-module';
import { PersonService } from 'src/person/person-service';
import { PersonProviders } from 'src/person/models/person.provider';
import { CandidateVendor } from './models/candidate-vendor-entity';
import { CandidateVendorService } from './candidate-vendor.service';
import { CandidateVendorProviders } from './models/candidate-vendor.provider';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { ContactService } from 'src/contact/contact.service';
import { ContactProviders } from 'src/contact/models/contact.provider';
import { Job } from 'src/job/models/job-entity';
import { JobService } from 'src/job/job-service';
import { JobProviders } from 'src/job/models/job.provider';
import { ContractType } from 'src/contracttype/models/contractType-entity';
import { ContractTypeService } from 'src/contracttype/contractType-service';
import { ContractTypeProviders } from 'src/contracttype/models/contractType.provider';

@Module({
  imports: [
    DatabaseModule,
    AddressModule,
    ClientModule,
    WorkAuthorizationModule,
    CandidateVendor,
    ContactDetails,
    Job,
    ContractType,
  ],
  controllers: [CandidateController],
  providers: [
    CandidateService,
    ...CandidateProviders,
    CandidateVendorService,
    ...CandidateVendorProviders,
    VendorService,
    ...VendorProviders,
    ReferralService,
    ...ReferralProviders,
    BackGround_Check_service,
    ...BackgroundCheckProvider,
    RateRevisionService,
    ...RateRevisionProviders,
    DocumentationService,
    ...DocumentationProvider,
    StartEndOperationsService,
    ...StartEndOperationsProviders,
    PersonService,
    ...PersonProviders,
    ContactService,
    ...ContactProviders,
    JobService,
    ...JobProviders,
    ContractTypeService,
    ...ContractTypeProviders,
  ],
  exports: [CandidateService],
})
export class CandidateModule {}
