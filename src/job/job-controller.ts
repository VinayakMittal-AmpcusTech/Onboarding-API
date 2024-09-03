import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  Post,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Job } from './models/job-entity';
import { JobService } from './job-service';
import { JobDTO } from './dto/job-dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Job')
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) { }

  @Get()
  async getAllJob(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/byid/:jobId')
  async getJobById(@Req() req: Request, @Res() res: Response, @Param() param) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/get-all-jobs')
  async test(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any,
  ) {
    try {
      const jobDataResult = await this.jobService.getAllJob();
      res.status(HttpStatus.OK).json(jobDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/add-job')
  async createJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: JobDTO,
  ) {
    try {
      const jobDataResult = await this.jobService.createJob(body);
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-job')
  @ApiOperation({ summary: 'edit job' })
  @ApiBody({ type: JobDTO })
  async editJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: JobDTO,
  ) {
    try {
      const jobDataResult = await this.jobService.updateJob(body);
      res.status(HttpStatus.OK).json(jobDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  // @Post('/delete-job')
  @Post('/delete-only-job/:id')
  @ApiOperation({ summary: 'Delete job' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteJob(@Req() req: Request, @Res() res: Response, @Param() param) {
    try {
      const jobDataResult = await this.jobService.deleteJob(param.id);
      res.status(HttpStatus.OK).json(jobDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/byUniqueId/:singleJobId')
  @ApiOperation({ summary: 'Get job' })
  @ApiParam({
    name: 'singleJobId',
    required: true,
    description: 'job id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getSingleJobById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const jobData = await this.jobService.getJobById(param.singleJobId);
      res.status(HttpStatus.OK).json(jobData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }
}
