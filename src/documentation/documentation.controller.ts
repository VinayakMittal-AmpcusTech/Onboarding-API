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
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DocumentationService } from './documentation.service';

@ApiTags('Documentation')
@Controller('documentation')
export class documentationController {
  constructor(private readonly documentationService: DocumentationService) { }

  @Get('/get-documentation/:candidateId')
  @ApiOperation({ summary: 'Get candidate' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidate id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getDocumentationByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const AllData = await this.documentationService.getDocumentation(
        param.candidateId,
      );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/edit-documentation')
  @ApiOperation({ summary: 'Get All Data' })
  @ApiParam({
    name: 'singleCandidateId',
    required: true,
    description: 'singleCandidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async editCandidateDocumentation(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const AllData = await this.documentationService.updateDocumentation(body);
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-documentation/:candidateId')
  @ApiOperation({ summary: 'Delete by candidate id' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteDocumentationByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const deleteResult = await this.documentationService.deleteDocumentation(
        param.candidateId,
      );
      res.status(HttpStatus.OK).json(deleteResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
