import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CandidateModule } from './candidate/candidate.module';
import { ClientModule } from './client/client.module';
import { AddressModule } from './address/address.module';
import { BackgroundCheckModule } from './BackgroundCheck/backgroundCheck.module';
import { RateRevisionModule } from './raterevision/raterevision.module';
import { StartEndOperationsModule } from './startendoperations/startendoperations.module';
import { VendorModule } from './vendor/vendor-module';
import { ReferralModule } from './referral/referral-module';
import { JobModule } from './job/job-module';
import { WorkAuthorizationModule } from './workAuthorization/workAuthorization-module';
import { ContractTypeModule } from './contracttype/contractType-module';
import { CandidateVendorModule } from './candidate/candidate-vendor.module';
import { DocumentationModule } from './documentation/documentation.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    AuthModule,
    AddressModule,
    CandidateModule,
    ClientModule,
    ReferralModule,
    JobModule,
    UserModule,
    AuthModule,
    BackgroundCheckModule,
    DocumentationModule,
    VendorModule,
    RateRevisionModule,
    WorkAuthorizationModule,
    ContractTypeModule,
    CandidateVendorModule,
    StartEndOperationsModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
