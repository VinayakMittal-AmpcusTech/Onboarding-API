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
import { User } from 'src/user/models/user.entity';

@Table({
  tableName: 'startendoperations',
})
export class StartEndOperations extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @Column({ type: DataType.INTEGER })
  @ForeignKey(() => Candidate)
  candidateId: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  joiningStatus: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  joiningType: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  joiningStatusRemark: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  recruiter: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  teamLead: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  crm: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  teamManager: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  seniorManager: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  assoDirector: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  centerHead: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  onsiteAccDirector: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  onboCoordinator: string;

  @AllowNull(false)
  @Column
  endDate: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  exitClearance: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  endReason: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  endRemarks: string;

  @AllowNull(false)
  @Column
  grossBr: string;

  @AllowNull(false)
  @Column
  mspFeePercentage: string;

  @AllowNull(false)
  @Column
  mspFee: string;

  @AllowNull(false)
  @Column
  payRate: string;

  @AllowNull(false)
  @Column
  refFee: string;

  @AllowNull(false)
  @Column
  taxOHPercentage: string;

  @AllowNull(false)
  @Column
  taxOH: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  hBenefitesOpted: string;

  @AllowNull(false)
  @Column
  hBenefitesCost: string;

  @AllowNull(false)
  @Column
  netBillRate: string;

  @AllowNull(false)
  @Column
  netPurchase: string;

  @AllowNull(false)
  @Column
  margin: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  fullTimeSalaryOffered: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  jobLevel: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  ffInvoiceStatus: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;
}
