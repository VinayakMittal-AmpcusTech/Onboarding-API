import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RateRevisionService } from './raterevision.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RateRevision } from './models/raterevision-entity';
import { RateRevisionDTO } from './dto/raterevision-dto';
// import { Address } from './models/address-entity';
// import { AddressService } from './address.service';
@ApiTags('rate-revision')
@Controller('rate-revision')
export class RateRevisionController {
  constructor(private readonly rateRevisionService: RateRevisionService) { }

  // @Get('/get')
  // async getAllRateRevision(@Res() res: Response) {
  //   try {
  //     res.status(HttpStatus.OK).json();
  //   } catch (error) {}
  //   return;
  // }

  // @Post('/create')
  // async createRateRevision(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: RateRevisionDTO,
  // ) {
  //   try {
  //     const result = await this.rateRevisionService.createRateRevision(body);
  //     res.status(HttpStatus.OK).json(result);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  // }

  // @ApiOperation({ summary: 'Delete Rate Revision' })
  // @Delete('/:id')
  // @ApiParam({
  //   name: 'id',
  //   required: true,
  //   description: 'Question id need to delete',
  //   schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  // })
  // async deleteRateRevision(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Param() param,
  // ) {
  //   try {
  //     const result = await this.rateRevisionService.deleteRateRevision(
  //       param.id,
  //     );
  //     res.status(HttpStatus.OK).json(result);
  //   } catch (error) {
  //     console.log('Error updating Organization', error);
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  // }

  @Get('/get-rate-revision/:candidateId')
  @ApiOperation({ summary: 'Get rateRevision' })
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
      const AllData = await this.rateRevisionService.getRateRevision(
        param.candidateId,
      );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @ApiBody({ type: RateRevisionDTO })
  @Post('/edit-rate-revision')
  @ApiOperation({ summary: 'update Data' })
  // @ApiParam({
  //   name: 'singleCandidateId',
  //   required: true,
  //   description: 'singleCandidateId',
  //   schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  // })
  async editCandidateRateRevision(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: RateRevisionDTO,
  ) {
    try {
      const updatedData = await this.rateRevisionService.updateRateRevision(
        body,
      );
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-rate-revision/:candidateId')
  @ApiOperation({ summary: 'Delete by candidate id' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteRateRevisionByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const deleteResult = await this.rateRevisionService.deleteRateRevision(
        param.candidateId,
      );
      res.status(HttpStatus.OK).json(deleteResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
