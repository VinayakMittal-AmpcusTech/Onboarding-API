import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Referral } from './models/referral-entity';
import { ReferralDTO } from './dto/referral-dts';
import { sequelize } from 'src/database/sequelize.connection';
import { ReferralUpdateDTO } from './dto/update-referral-dto';

@Injectable()
export class ReferralService {
  constructor(
    @Inject('REFERRAL_REPOSITORY')
    private referralRepository: typeof Referral,
  ) { }

  async getAllReferral() {
    const result = await this.referralRepository.findAll({
      where: { isActive: true },
    });
    return result;
  }

  async createReferral(body: ReferralDTO) {
    const createBody: any = {
      ...body,
      id: body.id,
      candidateId: body.candidateId,
      federalId: body.federalID,
      companyName: body.companyName,
      contactPerson: body.contactPerson,
      email: body.email,
      contactNumber: body.contactNumber,
      signAuthority: body.signAuthority,
      signAuthorityDesignation: body.signAuthorityDesignation,
      stateOfIncorporation: body.stateOfIncorporation,
    };
    const createdCamera = await this.referralRepository.create<Referral>(
      createBody,
    );
    return createdCamera;
  }

  async createAddressDto(body: ReferralDTO) {
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

  async getReferralNyCandidateId(candidateId: number) {
    const RateRevision = await this.referralRepository.findOne({
      where: { candidateId: candidateId },
    });
    return RateRevision;
  }
  // UPDATE onboarding.referral
  // SET companyName='', federalId='', contactPerson='', signAuthority='', signAuthorityDesignation='',
  // stateOfIncorporation = '', candidateId = 0, isActive = 1, createdAt = '', updatedAt = '', personId = 0
  // WHERE id=0;

  async updateReferral(body: ReferralUpdateDTO) {
    const updatedReferral = await sequelize.query(
      "UPDATE referral SET companyName = '" +
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
      "' WHERE candidateId = " +
      body.candidateId +
      ';',
    );
    return updatedReferral;
  }
}
