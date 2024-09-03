import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Op } from 'sequelize';
import * as fs from 'fs';
import * as moment from "moment";
import { Address } from './models/address-entity';
import { AddressDTO } from './dto/address-dto';
import { ContactDTO } from 'src/contact/dto/contact-dto';

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: typeof Address,
  ) { }
  async getAllAddress() {
    const result = await this.addressRepository.findAll({
      where: { isActive: true },
    });
    return result;
  }

  async createAddress(body: AddressDTO) {
    const createBody: any = {
      ...body,
      line1: body.line1,
      line2: body.line2,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      country: body.country
    }
    const createdAddress =
      await this.addressRepository.create<Address>(createBody);
    return createdAddress;
  }

  async getAddressById(id: number) {
    const examList = await this.addressRepository.findOne({
      where: { id: id }
    });
    return examList;
  }
}