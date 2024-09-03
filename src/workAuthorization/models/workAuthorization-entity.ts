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
import { Address } from 'src/address/models/address-entity';
import { Candidate } from 'src/candidate/models/candidate-entity';
import { ContactDetails } from 'src/contact/models/contact-entity';
  
  @Table({
    tableName: 'work-authorization'
  })
  export class WorkAuthorization extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    workAuthorization: string;
  
    @HasOne(() => Candidate)
    candidate: Candidate

    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  