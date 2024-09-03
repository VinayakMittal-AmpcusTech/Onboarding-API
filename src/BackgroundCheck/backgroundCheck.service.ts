import { Inject, Injectable } from '@nestjs/common';
import { BackgroundCheck } from './models/backgroundCheck.entity';
import { BackgroundCheckDTO } from './dto/backgroundCheck.dto';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class BackGround_Check_service {
  constructor(
    @Inject('BACKGROUND_CHECK_REPOSITORY')
    private backgroundCheck: typeof BackgroundCheck,
  ) { }

  async createBGCData(allBGCData: BackgroundCheckDTO) {
    let backgroundCheckData = {
      caseID1: allBGCData.caseID1,
      BGCInitiatedOn: allBGCData.BGCInitiatedOn,
      primaryBGCInitiatedThru: allBGCData.primaryBGCInitiatedThru,
      BGCPackage1: allBGCData.BGCPackage1,
      BGCPackage2: allBGCData.BGCPackage2,
      BGCInvoiceMonth: allBGCData.BGCInvoiceMonth,
      BGCChargesPrimary: allBGCData.BGCChargesPrimary,
      secondary: allBGCData.secondary,
      caseID2: allBGCData.caseID2,
      secondaryBGCInitiatedOn: allBGCData.secondaryBGCInitiatedOn,
      secondaryBGCInitiatedThru: allBGCData.secondaryBGCInitiatedThru,
      secondaryBGCPackage1: allBGCData.secondaryBGCPackage1,
      secondaryBGCPackage2: allBGCData.secondaryBGCPackage2,
      secondaryBGCInvoiceMonth: allBGCData.secondaryBGCInvoiceMonth,
      secondaryBGCCharges: allBGCData.secondaryBGCCharges,
      tertiary: allBGCData.tertiary,
      caseID3: allBGCData.caseID3,
      tertiaryBGCInitiatedOn: allBGCData.tertiaryBGCInitiatedOn,
      tertiaryBGCInitiatedThru: allBGCData.tertiaryBGCInitiatedThru,
      tertiaryBGCPackage1: allBGCData.tertiaryBGCPackage1,
      tertiaryBGCPackage2: allBGCData.tertiaryBGCPackage2,
      tertiaryBGCInvoiceMonth: allBGCData.tertiaryBGCInvoiceMonth,
      tertiaryBGCCharges: allBGCData.tertiaryBGCCharges,
      BGCStatus: allBGCData.BGCStatus,
      BGCCompletedOn: allBGCData.BGCCompletedOn,
      BGCAffidavitStatus: allBGCData.BGCAffidavitStatus,
      BGCAffidavitOn: allBGCData.BGCAffidavitOn,
      BGCReportStatus: allBGCData.BGCReportStatus,
      BGCAdjuStatus: allBGCData.BGCAdjuStatus,
      adjuSupportingDocs: allBGCData.adjuSupportingDocs,
      dateOfAdjudication: allBGCData.dateOfAdjudication,
      finalBGCReport: allBGCData.finalBGCReport,
      BGCRemark: allBGCData.BGCRemark,
      candidateId: allBGCData.candidateId
    }
    const result = await this.backgroundCheck.create<BackgroundCheck>(backgroundCheckData);
    return null;
  }

  async getBackgroundCheck(candidateId: number) {
    const candidateVendor = await this.backgroundCheck.findOne({
      where: { candidateId: candidateId },
    });
    return candidateVendor;
  }

  async updateBackgroundCheck(body: BackgroundCheckDTO) {
    let updatedBackgroundCheck;
    if (!body.secondary) {
      updatedBackgroundCheck = await sequelize.query("UPDATE background_check SET caseID1='" + body.caseID1 + "', BGCInitiatedOn='" + body.BGCInitiatedOn + "', primaryBGCInitiatedThru='" + body.primaryBGCInitiatedThru + "', BGCPackage1='" + body.BGCPackage1 + "', BGCPackage2='" + body.BGCPackage2 + "', BGCInvoiceMonth='" + body.BGCInvoiceMonth + "', BGCChargesPrimary='" + body.BGCChargesPrimary + "', secondary=" + body.secondary + ", caseID2=" + null + ", secondaryBGCInitiatedOn=" + null + ", secondaryBGCInitiatedThru=" + null + ", secondaryBGCPackage1=" + null + ", secondaryBGCPackage2=" + null + ", secondaryBGCInvoiceMonth=" + null + ", secondaryBGCCharges=" + null + ", tertiary=" + body.tertiary + ", caseID3=" + null + ", tertiaryBGCInitiatedOn=" + null + ", tertiaryBGCInitiatedThru=" + null + ", tertiaryBGCPackage1=" + null + ", tertiaryBGCPackage2=" + null + ", tertiaryBGCInvoiceMonth=" + null + ", tertiaryBGCCharges=" + null + ", BGCStatus='" + body.BGCStatus + "', BGCCompletedOn='" + body.BGCCompletedOn + "', BGCAffidavitStatus='" + body.BGCAffidavitStatus + "', BGCAffidavitOn='" + body.BGCAffidavitOn + "', BGCReportStatus='" + body.BGCReportStatus + "', BGCAdjuStatus='" + body.BGCAdjuStatus + "', adjuSupportingDocs='" + body.adjuSupportingDocs + "', dateOfAdjudication='" + body.dateOfAdjudication + "', finalBGCReport='" + body.finalBGCReport + "', BGCRemark='" + body.BGCRemark + "' WHERE candidateId=" + body.candidateId);
    } else if (body.secondary && !body.tertiary) {
      updatedBackgroundCheck = await sequelize.query("UPDATE background_check SET caseID1='" + body.caseID1 + "', BGCInitiatedOn='" + body.BGCInitiatedOn + "', primaryBGCInitiatedThru='" + body.primaryBGCInitiatedThru + "', BGCPackage1='" + body.BGCPackage1 + "', BGCPackage2='" + body.BGCPackage2 + "', BGCInvoiceMonth='" + body.BGCInvoiceMonth + "', BGCChargesPrimary='" + body.BGCChargesPrimary + "', secondary=" + body.secondary + ", caseID2='" + body.caseID2 + "', secondaryBGCInitiatedOn='" + body.secondaryBGCInitiatedOn + "', secondaryBGCInitiatedThru='" + body.secondaryBGCInitiatedThru + "', secondaryBGCPackage1='" + body.secondaryBGCPackage1 + "', secondaryBGCPackage2='" + body.secondaryBGCPackage2 + "', secondaryBGCInvoiceMonth='" + body.secondaryBGCInvoiceMonth + "', secondaryBGCCharges='" + body.secondaryBGCCharges + "', tertiary=" + body.tertiary + ", caseID3=" + null + ", tertiaryBGCInitiatedOn=" + null + ", tertiaryBGCInitiatedThru=" + null + ", tertiaryBGCPackage1=" + null + ", tertiaryBGCPackage2=" + null + ", tertiaryBGCInvoiceMonth=" + null + ", tertiaryBGCCharges=" + null + ", BGCStatus='" + body.BGCStatus + "', BGCCompletedOn='" + body.BGCCompletedOn + "', BGCAffidavitStatus='" + body.BGCAffidavitStatus + "', BGCAffidavitOn='" + body.BGCAffidavitOn + "', BGCReportStatus='" + body.BGCReportStatus + "', BGCAdjuStatus='" + body.BGCAdjuStatus + "', adjuSupportingDocs='" + body.adjuSupportingDocs + "', dateOfAdjudication='" + body.dateOfAdjudication + "', finalBGCReport='" + body.finalBGCReport + "', BGCRemark='" + body.BGCRemark + "' WHERE candidateId=" + body.candidateId);
    } else if (body.secondary && body.tertiary) {
      updatedBackgroundCheck = await sequelize.query("UPDATE background_check SET caseID1='" + body.caseID1 + "', BGCInitiatedOn='" + body.BGCInitiatedOn + "', primaryBGCInitiatedThru='" + body.primaryBGCInitiatedThru + "', BGCPackage1='" + body.BGCPackage1 + "', BGCPackage2='" + body.BGCPackage2 + "', BGCInvoiceMonth='" + body.BGCInvoiceMonth + "', BGCChargesPrimary='" + body.BGCChargesPrimary + "', secondary=" + body.secondary + ", caseID2='" + body.caseID2 + "', secondaryBGCInitiatedOn='" + body.secondaryBGCInitiatedOn + "', secondaryBGCInitiatedThru='" + body.secondaryBGCInitiatedThru + "', secondaryBGCPackage1='" + body.secondaryBGCPackage1 + "', secondaryBGCPackage2='" + body.secondaryBGCPackage2 + "', secondaryBGCInvoiceMonth='" + body.secondaryBGCInvoiceMonth + "', secondaryBGCCharges='" + body.secondaryBGCCharges + "', tertiary=" + body.tertiary + ", caseID3='" + body.caseID3 + "', tertiaryBGCInitiatedOn='" + body.tertiaryBGCInitiatedOn + "', tertiaryBGCInitiatedThru='" + body.tertiaryBGCInitiatedThru + "', tertiaryBGCPackage1='" + body.tertiaryBGCPackage1 + "', tertiaryBGCPackage2='" + body.tertiaryBGCPackage2 + "', tertiaryBGCInvoiceMonth='" + body.tertiaryBGCInvoiceMonth + "', tertiaryBGCCharges='" + body.tertiaryBGCCharges + "', BGCStatus='" + body.BGCStatus + "', BGCCompletedOn='" + body.BGCCompletedOn + "', BGCAffidavitStatus='" + body.BGCAffidavitStatus + "', BGCAffidavitOn='" + body.BGCAffidavitOn + "', BGCReportStatus='" + body.BGCReportStatus + "', BGCAdjuStatus='" + body.BGCAdjuStatus + "', adjuSupportingDocs='" + body.adjuSupportingDocs + "', dateOfAdjudication='" + body.dateOfAdjudication + "', finalBGCReport='" + body.finalBGCReport + "', BGCRemark='" + body.BGCRemark + "' WHERE candidateId=" + body.candidateId);
    }
    return updatedBackgroundCheck;
  }

  async deleteBackgroundCheck(body: number) {
    const deletedJob = await sequelize.query("delete from `background_check` where candidateId = " + body);
    return deletedJob;
  }
}