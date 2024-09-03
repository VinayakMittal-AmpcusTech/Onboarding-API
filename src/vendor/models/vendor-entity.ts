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
import { Person } from 'src/person/models/person-entity';
import { Candidate } from 'src/candidate/models/candidate-entity';
import { CandidateVendor } from 'src/candidate/models/candidate-vendor-entity';
  
  @Table({
    tableName: 'vendor'
  })
  export class Vendor extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    companyName: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    federalId: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    contactPerson : string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    signAuthority : string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    signAuthorityDesignation : string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    stateOfIncorporation : string;

    @HasMany(() => CandidateVendor)
    candidateVendorId: CandidateVendor;
    
    @ForeignKey(() => Person)
    personId: Person;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  