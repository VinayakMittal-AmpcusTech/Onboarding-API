import { type } from 'os';
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
} from 'sequelize-typescript';
import { Address } from 'src/address/models/address-entity';
import { Candidate } from 'src/candidate/models/candidate-entity';

@Table({
  tableName: 'BackGround_Check',
})
export class BackgroundCheck extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // ---------------------------------
  @AllowNull(false)
  @Column
  caseID1: string;

  @AllowNull(false)
  @Column
  BGCInitiatedOn: string;

  @AllowNull(false)
  @Column
  primaryBGCInitiatedThru: string;

  @AllowNull(false)
  @Column
  BGCPackage1: string;

  @AllowNull(false)
  @Column
  BGCPackage2: string;

  @AllowNull(false)
  @Column
  BGCInvoiceMonth: string;

  @AllowNull(false)
  @Column
  BGCChargesPrimary: string;

  // ---------------------------------
  @AllowNull(false)
  @Column
  secondary: boolean;

  @AllowNull(true)
  @Column
  caseID2: string;

  @AllowNull(true)
  @Column
  secondaryBGCInitiatedOn: string;

  @AllowNull(true)
  @Column
  secondaryBGCInitiatedThru: string;

  @AllowNull(true)
  @Column
  secondaryBGCPackage1: string;

  @AllowNull(true)
  @Column
  secondaryBGCPackage2: string;

  @AllowNull(true)
  @Column
  secondaryBGCInvoiceMonth: string;

  @AllowNull(true)
  @Column
  secondaryBGCCharges: string;

  // ---------------------------------
  @AllowNull(false)
  @Column
  tertiary: boolean;

  @AllowNull(true)
  @Column
  caseID3: string;

  @AllowNull(true)
  @Column
  tertiaryBGCInitiatedOn: string;

  @AllowNull(true)
  @Column
  tertiaryBGCInitiatedThru: string;

  @AllowNull(true)
  @Column
  tertiaryBGCPackage1: string;

  @AllowNull(true)
  @Column
  tertiaryBGCPackage2: string;

  @AllowNull(true)
  @Column
  tertiaryBGCInvoiceMonth: string;

  @AllowNull(true)
  @Column
  tertiaryBGCCharges: string;

  // ---------------------------------
  @AllowNull(false)
  @Column
  BGCStatus: string;

  @AllowNull(false)
  @Column
  BGCCompletedOn: string;

  @AllowNull(false)
  @Column
  BGCAffidavitStatus: string;

  @AllowNull(false)
  @Column
  BGCAffidavitOn: string;

  @AllowNull(false)
  @Column
  BGCReportStatus: string;

  @AllowNull(false)
  @Column
  BGCAdjuStatus: string;

  @AllowNull(false)
  @Column
  adjuSupportingDocs: string;

  @AllowNull(false)
  @Column
  dateOfAdjudication: string;

  @AllowNull(true)
  @Column
  finalBGCReport: string;

  @AllowNull(true)
  @Column
  BGCRemark: string;

  @Column({ type: DataType.INTEGER })
  @ForeignKey(() => Candidate)
  candidateId: Candidate;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;
}
