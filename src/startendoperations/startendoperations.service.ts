import { Inject, Injectable } from '@nestjs/common';
import { StartEndOperations } from './models/startendoperations-entity';
import { StartEndOperationsDTO } from './dto/startendoperations-dto';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class StartEndOperationsService {
  constructor(
    @Inject('STARTENDOPERATIONS_REPOSITORY')
    private startEndOperationsRepository: typeof StartEndOperations,
  ) {}

  // async getAllStartEndOperations() {
  //   const result = await this.startEndOperationsRepository.findAll({
  //     where: { isActive: true },
  //   });
  //   return result;
  // }

  async createStartEndOperations(body: StartEndOperationsDTO) {
    const result = await this.startEndOperationsRepository.create({
      joiningStatus: body.joiningStatus,
      joiningType: body.joiningType,
      candidateId: body.candidateId,
      joiningStatusRemark: body.joiningStatusRemark,
      recruiter: body.recruiter,
      teamLead: body.teamLead,
      crm: body.crm,
      teamManager: body.teamManager,
      seniorManager: body.seniorManager,
      assoDirector: body.assoDirector,
      centerHead: body.centerHead,
      onsiteAccDirector: body.onsiteAccDirector,
      onboCoordinator: body.onboCoordinator,
      endDate: body.endDate,
      exitClearance: body.exitClearance,
      endReason: body.endReason,
      endRemarks: body.endRemarks,
      grossBr: body.grossBr,
      mspFeePercentage: body.mspFeePercentage,
      mspFee: body.mspFee,
      payRate: body.payRate,
      refFee: body.refFee,
      taxOHPercentage: body.taxOHPercentage,
      taxOH: body.taxOH,
      hBenefitesOpted: body.hBenefitesOpted,
      hBenefitesCost: body.hBenefitesCost,
      netBillRate: body.netBillRate,
      netPurchase: body.netPurchase,
      margin: body.margin,
      fullTimeSalaryOffered: body.fullTimeSalaryOffered,
      jobLevel: body.jobLevel,
      ffInvoiceStatus: body.ffInvoiceStatus,
    });
    return result;
  }

  async getStartEndOperations(candidateId: number) {
    const RateRevision = await this.startEndOperationsRepository.findOne({
      where: { candidateId: candidateId },
    });
    return RateRevision;
  }

  async updateStartEndOperations(body: StartEndOperationsDTO) {
    const updatedStartEndOperations = await sequelize.query(
      "UPDATE startendoperations SET joiningStatus = '" +
        body.joiningStatus +
        "', joiningType = '" +
        body.joiningType +
        "', joiningStatusRemark = '" +
        body.joiningStatusRemark +
        "', recruiter = '" +
        body.recruiter +
        "', teamLead = '" +
        body.teamLead +
        "', crm = '" +
        body.crm +
        "', teamManager = '" +
        body.teamManager +
        "', assoDirector = '" +
        body.assoDirector +
        "', centerHead = '" +
        body.centerHead +
        "', onsiteAccDirector = '" +
        body.onsiteAccDirector +
        "', onboCoordinator = '" +
        body.onboCoordinator +
        "', endDate = '" +
        body.endDate +
        "', exitClearance = '" +
        body.exitClearance +
        "', endReason = '" +
        body.endReason +
        "', endRemarks = '" +
        body.endRemarks +
        "', grossBr = '" +
        body.grossBr +
        "', mspFeePercentage = '" +
        body.mspFeePercentage +
        "', mspFee = '" +
        body.mspFee +
        "', payRate = '" +
        body.payRate +
        "', refFee = '" +
        body.refFee +
        "', taxOHPercentage = '" +
        body.taxOHPercentage +
        "', taxOH = '" +
        body.taxOH +
        "', hBenefitesOpted = '" +
        body.hBenefitesOpted +
        "', hBenefitesCost = '" +
        body.hBenefitesCost +
        "', netBillRate = '" +
        body.netBillRate +
        "', netPurchase = '" +
        body.netPurchase +
        "', margin = '" +
        body.margin +
        "', fullTimeSalaryOffered = '" +
        body.fullTimeSalaryOffered +
        "', jobLevel = '" +
        body.jobLevel +
        "', ffInvoiceStatus = '" +
        body.ffInvoiceStatus +
        "' WHERE candidateId = " +
        body.candidateId +
        ';',
    );

    return updatedStartEndOperations;
  }

  async deleteBackgroundCheck(body: number) {
    const deletedJob = await sequelize.query(
      'delete from `startendoperations` where candidateId = ' + body,
    );
    return deletedJob;
  }
}
