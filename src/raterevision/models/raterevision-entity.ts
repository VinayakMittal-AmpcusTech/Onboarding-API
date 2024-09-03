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
  tableName: 'raterevision',
})
export class RateRevision extends Model {
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
  grossBr: string;

  @AllowNull(false)
  @Column
  mspFeePercentage: string;

  @AllowNull(false)
  @Column
  mspFee: string;

  @AllowNull(false)
  @Column
  netBillRate: string;

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
  @Column
  optedForHB: string;

  @AllowNull(false)
  @Column
  healthB: string;

  @AllowNull(false)
  @Column
  netPurchase: string;

  @AllowNull(false)
  @Column
  margin: string;

  @AllowNull(false)
  @Column
  rateRevisionReason: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({ defaultValue: true, type: DataType.BOOLEAN })
  isActive: boolean;
}
