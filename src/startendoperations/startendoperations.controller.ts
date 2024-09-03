import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { StartEndOperationsService } from './startendoperations.service';
import { Request, Response } from 'express';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { StartEndOperationsDTO } from './dto/startendoperations-dto';

@ApiTags('start-end-operations')
@Controller('start-end-operations')
export class startEndOperationsController {
  constructor(
    private readonly startEndOperationsService: StartEndOperationsService,
  ) { }

  @Get()
  async getAllStartEndOperations(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/get-start-end-operations/:candidateId')
  @ApiOperation({ summary: 'Get StartEndOperations' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidate id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getRateRevisionByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const AllData =
        await this.startEndOperationsService.getStartEndOperations(
          param.candidateId,
        );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @ApiBody({ type: StartEndOperationsDTO })
  @Post('/edit-start-end-operations')
  @ApiOperation({ summary: 'update Data' })
  async editStartEndOperations(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: StartEndOperationsDTO,
  ) {
    try {
      const updatedData =
        await this.startEndOperationsService.updateStartEndOperations(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-start-end-operations/:candidateId')
  @ApiOperation({ summary: 'Delete by candidate id' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteStartEndOperationsByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const deleteResult =
        await this.startEndOperationsService.deleteBackgroundCheck(
          param.candidateId,
        );
      res.status(HttpStatus.OK).json(deleteResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
