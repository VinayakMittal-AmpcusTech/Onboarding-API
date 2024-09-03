import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    HasOne,
  } from 'sequelize-typescript';
import { Person } from 'src/person/models/person-entity';
import { ContactDetails } from 'src/contact/models/contact-entity';
  
  @Table({
    tableName: 'address'
  })
  export class Address extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    line1: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    line2: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    city: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    state: string;
  
    @AllowNull(false)
    @Column({ type: DataType.STRING })
    zipCode: string;
  
    @AllowNull(true)
    @Column({ type: DataType.STRING })
    country: string;

    @ForeignKey(() => Person)
    personId: number;

    @HasOne(() => ContactDetails)
    contactDetailId: ContactDetails;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column({ defaultValue: true, type: DataType.BOOLEAN })
    isActive: boolean;
  }
  