import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { WorkAuthorization } from './models/workAuthorization-entity';
import { WorkAuthorizationDTO } from './dto/workAuthorization-dts';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class WorkAuthorizationService {
  constructor(
    @Inject('WORKAUTHORIZATION_REPOSITORY')
    private workAuthorizationRepository: typeof WorkAuthorization,
  ) {}

  async getAllWorkAuthorization() {
    const result = await this.workAuthorizationRepository.findAll({
      where: { isActive: true },
    });
    return result;
  }

  async createWorkAuthorization(body: WorkAuthorizationDTO) {
    const createBody: any = {
      ...body,
      type: body.workAuthorization,
    };
    const createdWorkAuthorization =
      await this.workAuthorizationRepository.create<WorkAuthorization>(
        createBody,
      );
    return createdWorkAuthorization;
  }

  async getWorkAuthorizationById(id: any) {
    const examList = await this.workAuthorizationRepository.findOne({
      where: { id: id },
    });
    return examList;
  }

  async updateWorkAuthorization(body: WorkAuthorizationDTO) {
    const updatedJob = await sequelize.query(
      "UPDATE `work-authorization` SET workAuthorization='" +
        body.workAuthorization +
        "' WHERE id=" +
        body.id +
        ';',
    );
    return updatedJob;
  }

  async deleteWorkAuthorization(body: number) {
    const deletedJob = await sequelize.query(
      'delete from `work-authorization` where id = ' + body,
    );
    return deletedJob;
  }
}
