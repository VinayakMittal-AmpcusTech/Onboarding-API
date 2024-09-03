import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { ContractType } from './models/contractType-entity';
import { ContractTypeDTO } from './dto/contractType-dts';
import { sequelize } from 'src/database/sequelize.connection';

@Injectable()
export class ContractTypeService {
    constructor(
        @Inject('CONTRACTTYPE_REPOSITORY')
        private contractTypeRepository: typeof ContractType,
    ) { }

    async getAllContractType() {
        const result = await this.contractTypeRepository.findAll({
            where: { isActive: true },
        });
        return result;
    }

    async createContractType(body: ContractTypeDTO) {
        const createBody: any = {
            ...body,
            type: body.contractType,
        }
        const createdContractType = await this.contractTypeRepository.create<ContractType>(createBody);
        return createdContractType;
    }

    async getContractTypeById(id: any) {
        const examList = await this.contractTypeRepository.findOne({
            where: { id: id }
        });
        return examList;
    }

    async updateContractType(body: ContractTypeDTO) {
        const updatedJob = await sequelize.query("UPDATE `contract-type` SET contractType='" + body.contractType + "' WHERE id=" + body.id + ";");
        return updatedJob;
    }

    async deleteContractType(body: number) {
        const deletedJob = await sequelize.query("delete from `contract-type` where id = " + body);
        return deletedJob;
    }
}