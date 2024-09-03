import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Person } from './models/person-entity';
import { NotNull, Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Vendor } from 'src/vendor/models/vendor-entity';
import { Address } from 'src/address/models/address-entity';
import { Client } from 'src/client/models/client-entity';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: typeof Person,
    ) { }

    async getAllPerson(includeArray: any[]) {
        try {
            const result = await this.personRepository.findAll({
                include: includeArray
            });
            return result;
        } catch (error) {
            return null
        }
    }

    async createPerson() {
        const createBody: any = {
        }
        const createdPerson = await this.personRepository.create<Person>(createBody);
        return createdPerson;
    }

    async getPersonById(id: number, includeArray: any[]) {
        const examList = await this.personRepository.findOne({
            include: includeArray,
        });
        return examList;
    }
}