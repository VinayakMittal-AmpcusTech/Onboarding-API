import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Vendor } from './models/vendor-entity';
import { VendorDTO } from './dto/vendor-dts';
import { PersonService } from 'src/person/person-service';
import { Address } from 'src/address/models/address-entity';
import { Op } from 'sequelize';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { databaseProviders } from 'src/database/database.provider';
import { sequelize } from 'src/database/sequelize.connection';
import { Sequelize } from 'sequelize-typescript';
import { VendorUpdateDTO } from './dto/update-vendor-dto';

@Injectable()
export class VendorService {
  constructor(
    @Inject('VENDOR_REPOSITORY')
    private vendorRepository: typeof Vendor,
    private personService: PersonService,
  ) { }

  async getAllVendor() {
    // const result = await sequelize.query("select a.id as addressId, a.line1, a.line2, a.city, a.state, a.zipCode, a.country, v.id as vendorId, v.companyName, v.federalId, v.contactPerson, v.signAuthority, v.signAuthorityDesignation, v.stateOfIncorporation, v.personId from vendor v JOIN person p ON p.id = v.personId join address a on v.personId = a.personId;");

    const result = await this.personService.getAllPerson([
      {
        model: Vendor,
        where: { personId: Sequelize.col('person.id') },
      },
      {
        model: Address,
        include: [
          {
            model: ContactDetails,
          },
        ],
      },
    ]);

    return result;
  }

  async createVendor(body: VendorDTO) {
    const createBody: any = {
      ...body,
      id: body.id,
      companyName: body.companyName,
      federalId: body.federalID,
      contactPerson: body.contactPerson,
      signAuthority: body.signAuthority,
      signAuthorityDesignation: body.signAuthorityDesignation,
      stateOfIncorporation: body.stateOfIncorporation,
    };
    const createdCamera = await this.vendorRepository.create<Vendor>(
      createBody,
    );
    return createdCamera;
  }

  async createAddressDto(body: VendorDTO) {
    let createAddressDto: any = {};
    createAddressDto = {
      ...body,
      line1: body.line1,
      line2: body.line2,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      country: body.country,
      personId: body.personId,
    };
    return createAddressDto;
  }

  async getVendorById(id: number) {
    const examList = await this.vendorRepository.findOne({
      where: { id: id },
    });
    return examList;
  }

  async updateAddress(body: VendorDTO) {
    const updatedAddress = await sequelize.query(
      "update address a set a.line1 = '" +
      body.line1 +
      "', a.line2 = '" +
      body.line2 +
      "', a.city = '" +
      body.city +
      "', a.state = '" +
      body.state +
      "', a.zipCode = " +
      body.zipCode +
      ", a.country = '" +
      body.country +
      "' where a.personId = " +
      body.personId,
    );
    return updatedAddress;
  }

  async deleteAddress(body: number) {
    const deletedAddress = await sequelize.query(
      'delete from address a where a.personid = ' + body,
    );
    return deletedAddress;
  }
  // UPDATE onboarding.vendor
  // SET companyName='', federalId='', contactPerson='', signAuthority='', signAuthorityDesignation='',
  // stateOfIncorporation = '', isActive = 1, createdAt = '', updatedAt = '', personId = 0
  // WHERE id=0;

  async updateOnlyVendorData(body: VendorUpdateDTO) {
    const updatedVendor = await sequelize.query(
      "UPDATE vendor SET companyName = '" +
      body.companyName +
      "', federalId = '" +
      body.federalID +
      "', contactPerson = '" +
      body.contactPerson +
      "', signAuthority = '" +
      body.signAuthority +
      "', signAuthorityDesignation = '" +
      body.signAuthorityDesignation +
      "', stateOfIncorporation = '" +
      body.stateOfIncorporation +
      "' WHERE id = " +
      body.id +
      ';',
    );
    return updatedVendor;
  }

  async deleteVendor(body: number) {
    // console.log('delete from address a where a.personid = ' + body);
    const deletedClient = await sequelize.query(
      'delete from vendor a where a.id = ' + body,
    );
    return deletedClient;
  }
}
