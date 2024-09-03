import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Client } from './models/client-entity';
import { ClientDTO } from './dto/client-dto';
import { Address } from 'src/address/models/address-entity';
import { Person } from 'src/person/models/person-entity';
import { PersonService } from 'src/person/person-service';
import { sequelize } from 'src/database/sequelize.connection';
import { Sequelize } from 'sequelize-typescript';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { ClientUpdateDTO } from './dto/update-client-dto';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: typeof Client,
    private personService: PersonService,
  ) { }
  async getAllClient() {
    try {
      const result = await this.personService.getAllPerson([
        {
          model: Client,
          where: { personId: Sequelize.col('person.id') },
        },
        {
          model: Address,
          include: [
            {
              model: ContactDetails,
              // where: { addressId: Sequelize.col('addressId') }
            },
          ],
        },
      ]);

      // console.log('result: ', result);
      // const result = await sequelize.query("select a.id as addressId, a.line1, a.line2, a.city, a.state, a.zipCode, a.country, c.id as clientId, c.clientName, c.contractType, c.endClientName, c.mspName, c.personId from client c JOIN person p ON p.id = c.personId join address a on c.personId = a.personId;");
      return result;
    } catch (error) {
      return;
    }
  }

  async getClientByExamId(examClientId: number) {
    const result = await this.clientRepository.findOne({
      where: {
        examClientId: examClientId,
        isActive: true,
      },
    });
    return result;
  }

  async createClient(body: ClientDTO) {
    try {
      const createBody: any = {
        ...body,
        id: body.id,
        clientName: body.clientName,
        endClientName: body.endClientName,
        mspName: body.mspName,
        line1: body.line1,
        line2: body.line2,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
      };
      const createdCamera = await this.clientRepository.create<Client>(
        createBody,
      );
      return createdCamera;
    } catch (error) {
      return;
    }
  }

  async createAddressDto(body: ClientDTO) {
    let createClientDto: any = {};
    createClientDto = {
      ...body,
      line1: body.line1,
      line2: body.line2,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      personId: body.personId,
    };
    return createClientDto;
  }

  async getClientById(id: number[]) {
    const examList = await this.clientRepository.findAll({
      where: { id: id },
      include: Address,
    });
    return examList;
  }

  async updateAddress(body: ClientDTO) {
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

  async deleteClient(body: number) {
    // console.log('delete from address a where a.personid = ' + body);
    const deletedClient = await sequelize.query(
      'delete from client a where a.personid = ' + body,
    );
    return deletedClient;
  }

  async getSingleClientById(id: number) {
    const client = await this.clientRepository.findOne({
      where: { id: id },
    });
    return client;
  }

  async updateClient(body: ClientDTO) {
    const updatedClient = await sequelize.query(
      "UPDATE client SET clientName= '" +
      body.clientName +
      "', endClientName = '" +
      body.endClientName +
      "',mspName = '" +
      body.mspName +
      "',WHERE id = " +
      body.id +
      ';',
      //       contractType='', endClientName = '', mspName = '', isActive = 1, createdAt = '', updatedAt = '', personId = 0
      // WHERE id=0;
    );
    return updatedClient;
  }

  async updateOnlyClientData(body: ClientUpdateDTO) {
    const updatedClient = await sequelize.query(
      "UPDATE client SET clientName = '" +
      body.clientName +
      "', endClientName = '" +
      body.endClientName +
      "', mspName = '" +
      body.mspName +
      "' WHERE id = " +
      body.id +
      ';',
    );
    return updatedClient;
  }
}
