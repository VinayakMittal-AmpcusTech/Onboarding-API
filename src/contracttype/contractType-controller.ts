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
import { ContractType } from './models/contractType-entity';
import { ContractTypeService } from './contractType-service';
import { ContractTypeDTO } from './dto/contractType-dts';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Contract type')
@Controller('contractType')
export class ContractTypeController {
  constructor(private readonly contractTypeService: ContractTypeService) { }

  @Get('/get-all-contractType')
  @ApiOperation({ summary: 'Get All contract type' })
  async getAllWorkAuthorization(@Res() res: Response) {
    try {
      const workAuthorizationResult =
        await this.contractTypeService.getAllContractType();
      res.status(HttpStatus.OK).json(workAuthorizationResult);
    } catch (error) { }
    return;
  }

  @Get('/byid/:contractTypeId')
  async getContractTypeById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      res.status(HttpStatus.OK).json();
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

  @Post('add-contractType')
  async createContractType(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ContractTypeDTO,
  ) {
    try {
      const createdContractType =
        await this.contractTypeService.createContractType(body);
      res.status(HttpStatus.OK).json(createdContractType);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-contractType')
  async editJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ContractTypeDTO,
  ) {
    try {
      const contractTypeResult =
        await this.contractTypeService.updateContractType(body);
      res.status(HttpStatus.OK).json(contractTypeResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-contractType/:id')
  @ApiOperation({ summary: 'Delete Contract type' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteContractType(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const jobDataResult = await this.contractTypeService.deleteContractType(
        param.id,
      );
      res.status(HttpStatus.OK).json(jobDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}

