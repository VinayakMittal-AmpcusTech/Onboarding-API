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
  
  @Table({
    tableName: 'job'
  })
  export class Job extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    requestID: number;
  
    @AllowNull(false)
    @Column({ type: DataType.INTEGER })
    jobDivaID: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    jobTitle: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    jobType: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    lineOfBusiness: string
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    jobDescription: string

    @HasMany(() => Candidate)
    candidate: Candidate[];
    
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  