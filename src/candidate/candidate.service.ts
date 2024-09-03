import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Candidate } from './models/candidate-entity';
import { CandidateDTO } from './dto/candidate-dto';
import { ContactDTO } from 'src/contact/dto/contact-dto';
import { Person } from 'src/person/models/person-entity';
import { Address } from 'src/address/models/address-entity';
import { ContactDetails } from 'src/contact/models/contact-entity';
import { Documentation } from 'src/documentation/models/documentation.entity';
import { RateRevision } from 'src/raterevision/models/raterevision-entity';
import { Client } from 'src/client/models/client-entity';
import { Job } from 'src/job/models/job-entity';
import { StartEndOperations } from 'src/startendoperations/models/startendoperations-entity';
import { PersonService } from 'src/person/person-service';
import { Sequelize } from 'sequelize-typescript';
import { BackgroundCheck } from 'src/BackgroundCheck/models/backgroundCheck.entity';
import { sequelize } from 'src/database/sequelize.connection';
import { CandidateVendor } from './models/candidate-vendor-entity';
import { Vendor } from 'src/vendor/models/vendor-entity';
import { ClientService } from 'src/client/client.service';
import { JobService } from 'src/job/job-service';
import { CandidateVendorService } from './candidate-vendor.service';
import { VendorService } from 'src/vendor/vendor-service';
import { CandidateClientDTO } from './dto/candidate-client-dto';
import { CandidateJobDTO } from './dto/candidate-job-dto';
import { CandidateVendorEditDTO } from './dto/candidate-vendor-edit-dto';
import { CandidateWorkAuthorizationDTO } from './dto/candidate-work-authorization';
import { CandidateContractTypeDTO } from './dto/candidate-contract-type-dto';

@Injectable()
export class CandidateService {
  constructor(
    @Inject('CANDIDATE_REPOSITORY')
    private candidateRepository: typeof Candidate,
    private personService: PersonService,
    private clientService: ClientService,
    private jobService: JobService,
    private candidateVendorService: CandidateVendorService,
    private vendorService: VendorService,
  ) { }
  async getAllCandidate() {
    try {
      const candidate = new Candidate();
      const result = await this.personService.getAllPerson([
        {
          model: Candidate,
          where: {
            personId: Sequelize.col('person.id'),
            clientId: Sequelize.col('clientId'),
          },
          include: [
            {
              model: Documentation,
            },
            {
              model: RateRevision,
            },
            {
              model: StartEndOperations,
            },
            {
              model: BackgroundCheck,
            },
            {
              model: CandidateVendor,
            },
          ],
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
    } catch (error) {
      null
    }
    return null;
  }

  async getAllImportantDetailsOfCandidate(candidateId: number) {
    const candidate: any = await this.candidateRepository.findOne({
      where: { id: candidateId },
    });

    const clientAddress = await this.personService.getAllPerson([
      {
        model: Client,

        where: {
          personId: Sequelize.col('person.id'),

          id: candidate?.clientId,
        },
      },

      {
        model: Address,

        where: {
          personId: Sequelize.col('person.id'),
        },

        include: [
          {
            model: ContactDetails,
          },
        ],
      },
    ]);

    const client = await this.clientService.getSingleClientById(
      candidate?.clientId,
    );

    const clientData = {
      clientData: client,
      addressData: clientAddress,
    };
    const jobData = await this.jobService.getJobById(candidate?.jobId);

    const candidateVendorData: any =
      await this.candidateVendorService.getCandidateVendorByCandidateId(
        candidateId,
      );

    const vendor = await this.vendorService.getVendorById(
      candidateVendorData?.vendorId,
    );

    const vendorAddress = await this.personService.getAllPerson([
      {
        model: Vendor,

        where: {
          personId: Sequelize.col('person.id'),

          id: candidateVendorData?.vendorId,
        },
      },

      {
        model: Address,

        where: {
          personId: Sequelize.col('person.id'),
        },

        include: [
          {
            model: ContactDetails,
          },
        ],
      },
    ]);


    const vendorData = {
      vendorData: vendor,
      addressData: vendorAddress,
    };

    let jsonObj = {
      clientData: clientData,
      jobData: jobData,
      vendorData: vendorData,
    };
    return jsonObj;
  }

  async getCandidateByExamId(examCandidateId: number) {
    const result = await this.candidateRepository.findOne({
      where: {
        examCandidateId: examCandidateId,
        isActive: true,
      },
    });
    return result;
  }

  async createCandidate(body: CandidateDTO) {
    const createBody: any = {
      ...body,
      firstName: body.firstName,
      middleName: body.middleName,
      lastName: body.lastName,
      workAuthorizationId: body.workAuthorizationId,
      workAuthorizationExpiryDate: body.workAuthorizationExpiryDate,
      workingFrom: body.workingFrom,
      workType: body.workType,
      resumeSource: body.resumeSource,
      skillSet: body.skillSet,
      clientId: body.clientId,
      personId: body.personId,
      contractTypeId: body.contractTypeId,
      vendorId: body.vendorId,
      referralId: body.referralId,
      jobId: body.jobId,
    };
    const createdCandidate = await this.candidateRepository.create<Candidate>(
      createBody,
    );
    return createdCandidate;
  }

  async createAddressDto(body: CandidateDTO) {
    let createAddressDto: any = {};
    createAddressDto = {
      ...body,
      line1: body.line1,
      line2: body.line2,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      country: body.country,
    };
    return createAddressDto;
  }

  async createContactDto(body: ContactDTO) {
    let createContactDto: any = {};
    createContactDto = {
      ...body,
      contactNumber: body.contactNumber,
      email: body.email,
      faxNumber: body.faxNumber,
    };
    return createContactDto;
  }

  async getCandidateById(id: number) {
    // const candidate = await this.candidateRepository.findOne({
    //   where: { id: id },
    // });

    const candidate = await this.personService.getPersonById(id, [
      {
        model: Candidate,
        where: {
          personId: Sequelize.col('person.id'),
          id: id,
        },
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

    return candidate;
  }

  // async updateCandidate(body: CandidateDTO) {
  //     const updatedJob = await sequelize.query("UPDATE `contract-type` SET contractType='" + body.contractTypeId + "' WHERE id=" + body.id + ";");
  //     return updatedJob;
  // }

  // async deleteCandidate(body: number) {
  //     const deletedJob = await sequelize.query("delete from `contract-type` where id = " + body);
  //     return deletedJob;
  // }

  async updateCandidate(body: CandidateDTO) {
    const updatedJob = await sequelize.query(
      "UPDATE candidate SET firstName = '" +
      body.firstName +
      "', middleName = '" +
      body.middleName +
      "', lastName = '" +
      body.lastName +
      "', workAuthorizationExpiryDate = '" +
      body.workAuthorizationExpiryDate +
      "' WHERE id = " +
      body.id +
      ';',
    );
    return updatedJob;
  }

  async deleteCandidate(body: number) {
    const deletedCandidate = await sequelize.query(
      'delete from `candidate` where id = ' + body,
    );
    return deletedCandidate;
  }

  async updateCandidateClient(body: CandidateClientDTO) {
    const updatedJob = await sequelize.query(
      "UPDATE `candidate` SET clientId='" +
      body.clientId +
      "' WHERE id=" +
      body.id +
      ';',
    );
    return updatedJob;
  }

  async updateCandidateJob(body: CandidateJobDTO) {
    const updatedJob = await sequelize.query(
      "UPDATE `candidate` SET jobId='" +
      body.jobId +
      "' WHERE id=" +
      body.id +
      ';',
    );
    return updatedJob;
  }

  async updateCandidateVendor(body: CandidateVendorEditDTO) {
    const updatedJob = await sequelize.query(
      "UPDATE `candidate-vendor` SET candidateId='" +
      body.id +
      "', vendorId = '" +
      body.vendorId +
      "' WHERE id=" +
      body.candidateVendorId +
      ';',
    );
    return updatedJob;
  }

  async updateCandidateWorkAuthorization(body: CandidateWorkAuthorizationDTO) {
    const updatedWork = await sequelize.query(
      "UPDATE `candidate` SET workAuthorizationId='" +
      body.workAuthorizationId +
      "' WHERE id=" +
      body.id +
      ';',
    );
    return updatedWork;
  }

  async updateCandidateContractType(body: CandidateContractTypeDTO) {
    const updatedContract = await sequelize.query(
      "UPDATE `candidate` SET contractTypeId='" +
      body.contractTypeId +
      "' WHERE id=" +
      body.id +
      ';',
    );
    return updatedContract;
  }
}
