import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Address } from "src/address/models/address-entity";
import { Candidate } from "src/candidate/models/candidate-entity";
import { Client } from "src/client/models/client-entity";
import { ContactDetails } from "src/contact/models/contact-entity";
import { Referral } from "src/referral/models/referral-entity";
import { Vendor } from "src/vendor/models/vendor-entity";

@Table({
    tableName: 'person'
})
export class Person extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    })
    id: number;

    @HasMany(() => Address)
    addressId: Address[];

    @HasOne(() => Candidate)
    candidateId: Candidate;

    @HasOne(() => Client)
    clientId: Client;

    @HasOne(() => Vendor)
    vendorId: Vendor;

    @HasOne(() => Referral)
    referralId: Referral;
}