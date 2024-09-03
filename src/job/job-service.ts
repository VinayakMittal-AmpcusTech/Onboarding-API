import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Job } from './models/job-entity';
import { JobDTO } from './dto/job-dto';
import { sequelize } from 'src/database/sequelize.connection';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class JobService {
    constructor(
        @Inject('JOB_REPOSITORY')
        private jobRepository: typeof Job,
    ) { }

    async getAllJob() {
        const result = await this.jobRepository.findAll({
            where: { isActive: true },
        });
        return result;
    }

    async createJob(body: JobDTO) {
        const createBody: any = {
            ...body,
            requestID: body.requestID,
            jobDivaID: body.jobDivaID,
            jobTitle: body.jobTitle,
            jobType: body.jobType,
            lineOfBusiness: body.lineOfBusiness,
            jobDescription: body.jobDescription
        }
        const createdJob =
            await this.jobRepository.create<Job>(createBody);
        return createdJob;
    }

    async getJobById(id: number) {
        const jobData = await this.jobRepository.findOne({
            where: { id: id }
        });
        return jobData;
    }

    async updateJob(body: JobDTO) {
        const updatedJob = await sequelize.query("UPDATE job SET requestID=" + body.requestID + ", jobDivaID=" + body.jobDivaID + ", jobTitle='" + body.jobTitle + "', jobType='" + body.jobType + "', lineOfBusiness='" + body.lineOfBusiness + "', jobDescription='" + body.jobDescription + "' WHERE id=" + body.id + ";");
        return updatedJob;
    }

    async deleteJob(body: number) {
        const deletedJob = await sequelize.query("delete from job where id = " + body);
        return deletedJob;
    }
}