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
import { Candidate } from 'src/candidate/models/candidate-entity';
import { Vendor } from 'src/vendor/models/vendor-entity';
  
  @Table({
    tableName: 'candidate-vendor'
  })
  export class CandidateVendor extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN })
    isReferral: boolean;
    
    @ForeignKey(() => Candidate)
    candidateId: Candidate;
    
    @ForeignKey(() => Vendor)
    vendorId: Vendor;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  