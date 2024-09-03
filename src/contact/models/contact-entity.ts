import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    BelongsTo,
    HasMany,
    HasOne,
    ForeignKey,
  } from 'sequelize-typescript';
import { Person } from 'src/person/models/person-entity';
import { Candidate } from 'src/candidate/models/candidate-entity';
import { Client } from 'src/client/models/client-entity';
import { Vendor } from 'src/vendor/models/vendor-entity';
import { Address } from 'src/address/models/address-entity';
  
  @Table({
    tableName: 'contact-details'
  })
  export class ContactDetails extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    email: string;
  
    @AllowNull(false)
    @Column({ type: DataType.BIGINT })
    contactNumber: number;
  
    @AllowNull(true)
    @Column({ type: DataType.BIGINT })
    faxNumber: number;
    
    @ForeignKey(() => Address)
    addressId: Address;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  