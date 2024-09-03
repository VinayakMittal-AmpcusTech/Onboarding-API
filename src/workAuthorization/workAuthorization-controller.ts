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
import { WorkAuthorization } from './models/workAuthorization-entity';
import { WorkAuthorizationService } from './workAuthorization-service';
import { WorkAuthorizationDTO } from './dto/workAuthorization-dts';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Work Authorization')
@Controller('workAuthorization')
export class WorkAuthorizationController {
  constructor(
    private readonly workAuthorizationService: WorkAuthorizationService,
  ) { }

  @Get('/get-all-workAuthorization')
  @ApiOperation({ summary: 'Get All work authorization' })
  async getAllWorkAuthorization(@Res() res: Response) {
    try {
      const workAuthorizationResult =
        await this.workAuthorizationService.getAllWorkAuthorization();
      res.status(HttpStatus.OK).json(workAuthorizationResult);
    } catch (error) { }
    return;
  }

  @ApiOperation({ summary: 'Get work authorization' })
  @ApiParam({
    name: 'workAuthorizationId',
    required: true,
    description: 'get workAuthorization on id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @Get('/byid/:workAuthorizationId')
  async getWorkAuthorizationById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const workAuthorizationData =
        await this.workAuthorizationService.getWorkAuthorizationById(
          param.workAuthorizationId,
        );
      res.status(HttpStatus.OK).json(workAuthorizationData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/test')
  async test(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any,
  ) {
    try {
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('add-workAuthorization')
  async createWorkAuthorization(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: WorkAuthorizationDTO,
  ) {
    try {
      const createdWorkAuthorization =
        await this.workAuthorizationService.createWorkAuthorization(body);
      res.status(HttpStatus.OK).json(createdWorkAuthorization);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-workAuthorization')
  async editJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: WorkAuthorizationDTO,
  ) {
    try {
      const workAuthorizationResult =
        await this.workAuthorizationService.updateWorkAuthorization(body);
      res.status(HttpStatus.OK).json(workAuthorizationResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-workAuthorization/:id')
  @ApiOperation({ summary: 'Delete work authorization' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteWorkAuthorization(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const workDataResult =
        await this.workAuthorizationService.deleteWorkAuthorization(param.id);
      res.status(HttpStatus.OK).json(workDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}

