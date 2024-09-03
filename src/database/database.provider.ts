import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/models/user.entity';
import { Candidate } from 'src/candidate/models/candidate-entity';
import { Address } from 'src/address/models/address-entity';
import { Client } from 'src/client/models/client-entity';
import { RateRevision } from 'src/raterevision/models/raterevision-entity';
import { StartEndOperations } from 'src/startendoperations/models/startendoperations-entity';
import { BackgroundCheck } from 'src/BackgroundCheck/models/backgroundCheck.entity';
import { Documentation } from 'src/documentation/models/documentation.entity';
import { Vendor } from 'src/vendor/models/vendor-entity';
import { Referral } from 'src/referral/models/referral-entity';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { WorkAuthorization } from 'src/workAuthorization/models/workAuthorization-entity';
import { Job } from 'src/job/models/job-entity';
import { ContractType } from 'src/contracttype/models/contractType-entity';
import { Person } from 'src/person/models/person-entity';
import { CandidateVendor } from 'src/candidate/models/candidate-vendor-entity';
import { sequelize } from './sequelize.connection';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize1 = sequelize;
      sequelize1.addModels([
        Address,
        BackgroundCheck,
        Candidate,
        CandidateVendor,
        Client,
        ContactDetails,
        ContractType,
        Documentation,
        Job,
        Person,
        RateRevision,
        Referral,
        StartEndOperations,
        User,
        Vendor,
        WorkAuthorization
      ]);
      await sequelize1.sync();
      return sequelize1;
    },
  },
];
