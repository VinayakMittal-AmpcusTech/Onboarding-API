import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
  ForeignKey,
  HasOne,
} from 'sequelize-typescript';
import { BackgroundCheck } from 'src/BackgroundCheck/models/backgroundCheck.entity';
import { Person } from 'src/person/models/person-entity';
import { Client } from 'src/client/models/client-entity';
import { ContractType } from 'src/contracttype/models/contractType-entity';
import { Documentation } from 'src/documentation/models/documentation.entity';
import { Job } from 'src/job/models/job-entity';
import { RateRevision } from 'src/raterevision/models/raterevision-entity';
import { Referral } from 'src/referral/models/referral-entity';
import { StartEndOperations } from 'src/startendoperations/models/startendoperations-entity';
import { WorkAuthorization } from 'src/workAuthorization/models/workAuthorization-entity';
import { CandidateVendor } from './candidate-vendor-entity';

@Table({
  tableName: 'candidate',
})
export class Candidate extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.BOOLEAN })
  referralCase: boolean;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  firstName: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  middleName: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  lastName: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  workAuthorizationExpiryDate: Date;

  @HasOne(() => CandidateVendor)
  candidateVendorId: CandidateVendor;

  @ForeignKey(() => Person)
  personId: Person;

  @ForeignKey(() => WorkAuthorization)
  workAuthorizationId: WorkAuthorization;

  @ForeignKey(() => ContractType)
  contractTypeId: ContractType;

  @ForeignKey(() => Client)
  clientId: Client;

  @ForeignKey(() => Job)
  jobId: Job;

  @HasOne(() => BackgroundCheck)
  backgroundCheckId: BackgroundCheck;

  @HasOne(() => Documentation)
  documentationId: Documentation;

  @HasOne(() => StartEndOperations)
  startEndOperationId: StartEndOperations;

  @HasOne(() => RateRevision)
  rateRevisionId: RateRevision;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  workingFrom: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  workType: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  resumeSource: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  skillSet: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;
}
