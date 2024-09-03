import { verify } from 'crypto';
import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Candidate } from 'src/candidate/models/candidate-entity';

@Table({
  tableName: 'Documentation',
})
export class Documentation extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({type: DataType.INTEGER})
  @ForeignKey(() => Candidate)
  candidateId: Candidate;

  @AllowNull(true)
  @Column
  articlesOrCertificateOFIncorporation: string;

  @AllowNull(true)
  @Column
  w9Orw4: string;

  @AllowNull(true)
  @Column
  directDepositAgreement: string;

  @AllowNull(true)
  @Column
  voidCheckOrEmailContent: string;

  @AllowNull(true)
  @Column
  CIPCICICAOrCIPCICU: string;

  @AllowNull(true)
  @Column
  goodStandingDocument: string;

  @AllowNull(true)
  @Column
  workAuthorizationDocument: string;
  
  @AllowNull(true)
  @Column
  I9Form: string;

  @AllowNull(true)
  @Column
  listADocument: string;

  @AllowNull(true)
  @Column
  listBDocument: string;

  @AllowNull(true)
  @Column
  listCDocument: string;

  @AllowNull(true)
  @Column
  E_verify: string;

  @AllowNull(true)
  @Column
  E_verificationDate: Date;

  @AllowNull(true)
  @Column
  emergencyForm: string;

  @AllowNull(true)
  @Column
  vaccinationStatus: string;

  @AllowNull(true)
  @Column
  MSA: string;

  @AllowNull(true)
  @Column
  SOW: string;

  @AllowNull(true)
  @Column
  SOWValidity: Date;

  @AllowNull(true)
  @Column
  certificateOFInsuranceOrCOI: string;

  @AllowNull(true)
  @Column
  certificationOfInsurance: Date;

  @AllowNull(true)
  @Column
  clientTaskOrderOrSOW: string;

  @AllowNull(true)
  @Column
  clientTaskOrderOrSOWst: string;

  @AllowNull(true)
  @Column
  clientTaskOrderSigning: string;

  @AllowNull(true)
  @Column
  TaskOrderExpiryDate: string;

  @AllowNull(true)
  @Column
  documentationStatus: string;

  @AllowNull(true)
  @Column
  documentationRemark: string;

  @AllowNull(true)
  @Column
  documentationCompletionDate: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;
}
