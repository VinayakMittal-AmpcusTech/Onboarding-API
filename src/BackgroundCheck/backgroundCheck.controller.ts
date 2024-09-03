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
import { BackGround_Check_service } from 'src/BackgroundCheck/backgroundCheck.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Background check')
@Controller('backgroundCheck')
export class BackgroundCheck {
  constructor(
    private readonly backgroundCheckService: BackGround_Check_service,
  ) { }

  @Get('/get-backgroundcheck/:candidateId')
  @ApiOperation({ summary: 'Get candidate' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidate id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getBackgroundCheckByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const AllData = await this.backgroundCheckService.getBackgroundCheck(
        param.candidateId,
      );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/edit-backgroundcheck')
  @ApiOperation({ summary: 'Get All Data' })
  @ApiParam({
    name: 'singleCandidateId',
    required: true,
    description: 'singleCandidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async editCandidateBackgroundCheck(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const AllData = await this.backgroundCheckService.updateBackgroundCheck(
        body,
      );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-bgCheck/:candidateId')
  @ApiOperation({ summary: 'Delete by candidate id' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteBgCheckByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const deleteResult =
        await this.backgroundCheckService.deleteBackgroundCheck(
          param.candidateId,
        );
      res.status(HttpStatus.OK).json(deleteResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
