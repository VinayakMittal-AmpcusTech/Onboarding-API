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
import { Address } from 'src/address/models/address-entity';
import { Candidate } from 'src/candidate/models/candidate-entity';
  
  @Table({
    tableName: 'client'
  })
  export class Client extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    clientName: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    endClientName: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    mspName: string;
    
    @ForeignKey(() => Person)
    personId: Person;
  
    @HasMany(() => Candidate)
    candidate: Candidate[];
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  