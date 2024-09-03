import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { CandidateVendorDTO } from './dto/candidate-vendor-dto';
import { CandidateVendor } from './models/candidate-vendor-entity';

@Injectable()
export class CandidateVendorService {
  constructor(
    @Inject('CANDIDATE_VENDOR_REPOSITORY')
    private candidateVendorRepository: typeof CandidateVendor,
  ) { }
  async getAllCandidateVendor() {
    const result = await this.candidateVendorRepository.findAll({
      where: { isActive: true },
    });
    return result;
  }

  async createCandidateVendor(body: CandidateVendorDTO) {
    const createBody: any = {
      ...body,
      isReferral: body.isReferral,
      candidateId: body.candidateId,
      vendorId: body.vendorId,
    };
    const createdCandidateVendor =
      await this.candidateVendorRepository.create<CandidateVendor>(createBody);
    return createdCandidateVendor;
  }

  async getCandidateVendorByCandidateId(candidateId: number) {
    const candidateVendor = await this.candidateVendorRepository.findOne({
      where: { candidateId: candidateId },
    });
    return candidateVendor;
  }
}
