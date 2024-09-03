import { Inject, Injectable } from '@nestjs/common';
import { Documentation } from './models/documentation.entity';
import { DocumentationDTO } from './dto/documentation.dto';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class DocumentationService {
  constructor(
    @Inject('Documentation_Repository')
    private documentation: typeof Documentation,
  ) { }

  async createDocumentationData(allDocumentData: DocumentationDTO) {

    const result = await this.documentation.create({
      candidateId: allDocumentData.candidateId,
      articlesOrCertificateOFIncorporation: allDocumentData.articlesOrCertificateOFIncorporation,
      w9Orw4: allDocumentData.w9Orw4,
      directDepositAgreement: allDocumentData.directDepositAgreement,
      voidCheckOrEmailContent: allDocumentData.voidCheckOrEmailContent,
      CIPCICICAOrCIPCICU: allDocumentData.CIPCICICAOrCIPCICU,
      goodStandingDocument: allDocumentData.goodStandingDocument,
      workAuthorizationDocument: allDocumentData.workAuthorizationDocument,
      I9Form: allDocumentData.I9Form,
      listADocument: allDocumentData.listADocument,
      listBDocument: allDocumentData.listBDocument,
      listCDocument: allDocumentData.listCDocument,
      E_verify: allDocumentData.E_verify,
      E_verificationDate: allDocumentData.E_verificationDate,
      emergencyForm: allDocumentData.emergencyForm,
      vaccinationStatus: allDocumentData.vaccinationStatus,
      MSA: allDocumentData.MSA,
      SOW: allDocumentData.SOW,
      SOWValidity: allDocumentData.SOWValidity,
      certificateOFInsuranceOrCOI: allDocumentData.certificateOFInsuranceOrCOI,
      certificationOfInsurance: allDocumentData.certificationOfInsurance,
      clientTaskOrderOrSOW: allDocumentData.clientTaskOrderOrSOW,
      clientTaskOrderOrSOWst: allDocumentData.clientTaskOrderOrSOWst,
      clientTaskOrderSigning: allDocumentData.clientTaskOrderSigning,
      TaskOrderExpiryDate: allDocumentData.TaskOrderExpiryDate,
      documentationStatus: allDocumentData.documentationStatus,
      documentationRemark: allDocumentData.documentationRemark,
      documentationCompletionDate: allDocumentData.documentationCompletionDate,
    });

    return result;
  }

  async getDocumentation(candidateId: number) {
    const candidateVendor = await this.documentation.findOne({
      where: { candidateId: candidateId },
    });
    return candidateVendor;
  }

  async updateDocumentation(body: DocumentationDTO) {
      const updatedJob = await sequelize.query("UPDATE documentation SET articlesOrCertificateOFIncorporation = '" + body.articlesOrCertificateOFIncorporation+"', w9Orw4 = '" + body.w9Orw4+"', directDepositAgreement = '" + body.directDepositAgreement+"', voidCheckOrEmailContent = '" + body.voidCheckOrEmailContent+"', CIPCICICAOrCIPCICU = '" + body.CIPCICICAOrCIPCICU+"', goodStandingDocument = '" + body.goodStandingDocument+"', workAuthorizationDocument = '" + body.workAuthorizationDocument+"', I9Form = '" + body.I9Form+"', listADocument = '" + body.listADocument+"', listBDocument = '" + body.listBDocument+"', listCDocument = '" + body.listCDocument+"', E_verify = '" + body.E_verify+"', E_verificationDate = '" + body.E_verificationDate+"', emergencyForm = '" + body.emergencyForm+"', vaccinationStatus = '" + body.vaccinationStatus+"', MSA = '" + body.MSA+"', SOW = '" + body.SOW+"', SOWValidity = '" + body.SOWValidity+"', certificateOFInsuranceOrCOI = '" + body.certificateOFInsuranceOrCOI+"', certificationOfInsurance = '" + body.certificationOfInsurance+"', clientTaskOrderOrSOW = '" + body.clientTaskOrderOrSOW+"', clientTaskOrderOrSOWst = '" + body.clientTaskOrderOrSOWst+"', clientTaskOrderSigning = '" + body.clientTaskOrderSigning+"', TaskOrderExpiryDate = '" + body.TaskOrderExpiryDate+"', documentationStatus = '" + body.documentationStatus+"', documentationRemark = '" + body.documentationRemark+"', documentationCompletionDate = '" + body.documentationCompletionDate+"' WHERE candidateId = "+ body.candidateId +";"); 
      return updatedJob;
  }

  async deleteDocumentation(body: number) {
      const deletedDocumentation = await sequelize.query("delete from `documentation` where candidateId = " + body);
      return deletedDocumentation;
  }
}
