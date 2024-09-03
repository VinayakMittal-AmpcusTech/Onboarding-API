import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { ContactDetails } from './models/contact-entity';
import { ContactDTO } from './dto/contact-dto';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class ContactService {
  constructor(
    @Inject('CONTACT_REPOSITORY')
    private contactRepository: typeof ContactDetails,
  ) { }
  async getAllContact() {
    const result = await this.contactRepository.findAll({
      where: { isActive: true },
    });
    return result;
  }

  async getContactByExamId(examContactId: number) {
    const result = await this.contactRepository.findOne({
      where: { examContactId: examContactId, isActive: true },
    });
    return result;
  }

  async createContact(body: any) {
    const createBody: any = {
      ...body,
      email: body.email,
      contactNumber: body.contactNumber,
      faxNumber: body.faxNumber,
      addressId: body.addressId,
    };
    const createdCamera = await this.contactRepository.create<ContactDetails>(
      createBody,
    );
    return createdCamera;
  }

  async getContactById(id: number) {
    const examList = await this.contactRepository.findOne({
      where: { id: id },
    });
    return examList;
  }

  async createContactDto(body: ContactDTO) {
    let createBody: any = {};
    createBody = {
      ...body,
      email: body.email,
      contactNumber: body.contactNumber,
      faxNumber: body.faxNumber,
      addressId: body.addressId,
    };

    return createBody;
  }
  //  UPDATE onboarding.`contact-details`
  // SET email='', contactNumber=0, faxNumber=0, isActive=1, createdAt='', updatedAt='', addressId=0
  // WHERE id=0;

  async updateContactData(body: ContactDTO) {
    const updatedContact = await sequelize.query(
      "UPDATE `contact-details` SET email = '" +
      body.email +
      "', contactNumber = '" +
      body.contactNumber +
      "', faxNumber = '" +
      body.faxNumber +
      "' WHERE addressId = " +
      body.addressId +
      ';',
    );
    return updatedContact;
  }

  async deleteContact(body: number) {
    // console.log('delete from address a where a.personid = ' + body);
    // const deletedContact = await sequelize.query(
    //   'delete from contact-details c where a.id = ' + body,
    // );
    // return deletedContact;
    const result = await this.contactRepository.destroy({
      where: {
        id: body,
        isActive: true,
      },
    });
    return result;
  }
}
