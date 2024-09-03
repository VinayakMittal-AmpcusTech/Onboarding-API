import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    HasOne,
  } from 'sequelize-typescript';
import { Candidate } from 'src/candidate/models/candidate-entity';
  
  @Table({
    tableName: 'contract-type'
  })
  export class ContractType extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    contractType: string;
  
    @HasOne(() => Candidate)
    candidate: Candidate

    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  