import {
  Injectable,
  Inject,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Op } from 'sequelize';
import * as fs from 'fs';
import * as moment from 'moment';
// import { Address } from './models/address-entity';
// import { AddressDTO } from './dto/address-dto';
import { RateRevision } from './models/raterevision-entity';
import { AddressDTO } from 'src/address/dto/address-dto';
import { RateRevisionDTO } from './dto/raterevision-dto';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class RateRevisionService {
  constructor(
    @Inject('RATEREVISION_REPOSITORY')
    private rateRevisionRepository: typeof RateRevision,
  ) {}
  // async getAllRateRevision() {
  //   const result = await this.rateRevisionRepository.findAll({
  //     where: { isActive: true },
  //   });
  //   return result;
  // }

  // async createRateRevision(body: RateRevisionDTO) {
  //   const createBody: any = {
  //     ...body,
  //     id: body.id,
  //     grossBr: body.grossBr,
  //     mspFeePercentage: body.mspFeePercentage,
  //     mspFee: body.mspFee,
  //     netBillRate: body.netBillRate,
  //     payRate: body.payRate,
  //     refFee: body.refFee,
  //     taxOHPercentage: body.taxOHPercentage,
  //     taxOH: body.taxOH,
  //     optedForHB: body.optedForHB,
  //     healthB: body.healthB,
  //     netPurchase: body.netPurchase,
  //     margin: body.margin,
  //     rateRevisionReason: body.rateRevisionReason,
  //   };
  //   const createdRateRevision =
  //     await this.rateRevisionRepository.create<RateRevision>(createBody);
  //   return createdRateRevision;
  // }

  // async deleteRateRevision(id: number) {

  //   try {
  //     const deleted = await this.rateRevisionRepository.destroy({
  //       where: {
  //         id: id,
  //       },
  //     });
  //     if (deleted) {
  //       return { success: true, data: deleted };
  //     } else {
  //        return { success: false, Error: "Invalid Rate Revision Id" };
  //     }
  //   } catch (e) {
  //     return { success: false };
  //   }
  // }
  async createRateRevision(body: RateRevisionDTO) {
    const result = await this.rateRevisionRepository.create({
      candidateId: body.candidateId,
      grossBr: body.grossBr,
      mspFeePercentage: body.mspFeePercentage,
      mspFee: body.mspFee,
      netBillRate: body.netBillRate,
      payRate: body.payRate,
      refFee: body.refFee,
      taxOHPercentage: body.taxOHPercentage,
      taxOH: body.taxOH,
      optedForHB: body.optedForHB,
      healthB: body.healthB,
      netPurchase: body.netPurchase,
      margin: body.margin,
      rateRevisionReason: body.rateRevisionReason,
    });
    return result;
  }

  async getRateRevision(candidateId: number) {
    const RateRevision = await this.rateRevisionRepository.findOne({
      where: { candidateId: candidateId },
    });
    return RateRevision;
  }

  async updateRateRevision(body: RateRevisionDTO) {
    const updatedRateRevision = await sequelize.query(
      "UPDATE raterevision SET grossBr = '" +
        body.grossBr +
        "', mspFeePercentage = '" +
        body.mspFeePercentage +
        "', mspFee = '" +
        body.mspFee +
        "', netBillRate = '" +
        body.netBillRate +
        "', payRate = '" +
        body.payRate +
        "', refFee = '" +
        body.refFee +
        "', taxOHPercentage = '" +
        body.taxOHPercentage +
        "', taxOH = '" +
        body.taxOH +
        "', optedForHB = '" +
        body.optedForHB +
        "', healthB = '" +
        body.healthB +
        "', netPurchase = '" +
        body.netPurchase +
        "', margin = '" +
        body.margin +
        "', rateRevisionReason = '" +
        body.rateRevisionReason +
        "' WHERE candidateId = " +
        body.candidateId +
        ';',
    );

    return updatedRateRevision;
  }

  async deleteRateRevision(body: number) {
    const deletedRR = await sequelize.query(
      'delete from `raterevision` where candidateId = ' + body,
    );
    return deletedRR;
  }
}
