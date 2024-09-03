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
import { Candidate } from './models/candidate-entity';
import { CandidateService } from './candidate.service';
import { BackGround_Check_service } from 'src/BackgroundCheck/backgroundCheck.service';
import { AddressService } from 'src/address/address.service';
import { RateRevisionService } from 'src/raterevision/raterevision.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { StartEndOperationsService } from 'src/startendoperations/startendoperations.service';
import { DocumentationService } from 'src/documentation/documentation.service';
import { ClientService } from 'src/client/client.service';
import { VendorService } from 'src/vendor/vendor-service';
import { ReferralService } from 'src/referral/referral-service';
import { WorkAuthorizationService } from 'src/workAuthorization/workAuthorization-service';
import { CandidateVendorService } from './candidate-vendor.service';

@ApiTags('Candidate-Vendor')
@Controller('candidate-vendor')
export class CandidateVendorController {
  constructor(
    private readonly addressService: AddressService,
    private readonly candidateService: CandidateService,
    private readonly clientService: ClientService,
    private readonly vendorService: VendorService,
    private readonly referralService: ReferralService,
    private readonly backgroundCheckService: BackGround_Check_service,
    private readonly rateRevisionService: RateRevisionService,
    private readonly startEndOperationsService: StartEndOperationsService,
    private readonly documentationService: DocumentationService,
    private readonly workAuthorizationService: WorkAuthorizationService,
    private readonly candidateVendorService: CandidateVendorService,
  ) { }

  @Get()
  async getAllCandidate(@Res() res: Response) {
    try {
      await this.candidateService.getAllCandidate();
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/byForeignKey-candidateId/:candidateId')
  @ApiOperation({ summary: 'Get candidate vendor' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'get candidateVendor on CandidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getCandidateVendorByCandidateId(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const candidateVendorIdData =
        await this.candidateVendorService.getCandidateVendorByCandidateId(
          param.candidateId,
        );
      res.status(HttpStatus.OK).json(candidateVendorIdData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/test')
  async getTest(@Req() req: Request, @Res() res: Response, @Param() param) {
    try {
      res.status(HttpStatus.OK).json('okay');
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
      const clientData = inputData.allData.clientData;
      const clientDataResult = await this.clientService.createClient(
        clientData,
      );
      const clientAddressDto = await this.clientService.createAddressDto(
        clientData,
      );
      clientAddressDto.clientId = clientDataResult.id;
      const clientAddressDataResult = await this.addressService.createAddress(
        clientAddressDto,
      );

      const workAuthorizationData = inputData.allData.candidateData;
      const workAuthorizationDataResult =
        await this.workAuthorizationService.createWorkAuthorization(
          workAuthorizationData,
        );

      const candidateData = inputData.allData.candidateData;
      candidateData.clientId = clientDataResult.id;
      candidateData.workAuthorizationId = workAuthorizationDataResult.id;
      const candidateDataResult = await this.candidateService.createCandidate(
        candidateData,
      );
      const candidateAddressDto = await this.candidateService.createAddressDto(
        candidateData,
      );
      candidateAddressDto.candidateId = candidateDataResult.id;
      candidateAddressDto.clientId = null;
      const candidateAddressDataResult =
        await this.addressService.createAddress(candidateAddressDto);

      const vendorData = inputData.allData.vendorData;
      // candidateData.clientId = clientDataResult.id;
      const vendorDataResult = await this.vendorService.createVendor(
        vendorData,
      );
      const vendorAddressDto = await this.vendorService.createAddressDto(
        vendorData,
      );
      vendorAddressDto.vendorId = vendorDataResult.id;
      // vendorAddress.candidateId = candidateDataResult.id;
      // vendorAddress.clientId = null;
      const vendorAddressDataResult = await this.addressService.createAddress(
        vendorAddressDto,
      );

      const referralData = inputData.allData.referralData;
      // candidateData.clientId = clientDataResult.id;
      const referralDataResult = await this.referralService.createReferral(
        referralData,
      );
      const referralAddressDto = await this.referralService.createAddressDto(
        referralData,
      );
      referralAddressDto.referralId = referralDataResult.id;
      // vendorAddress.candidateId = candidateDataResult.id;
      // vendorAddress.clientId = null;
      const referralAddressDataResult = await this.addressService.createAddress(
        referralAddressDto,
      );

      const backgroundCheckData = inputData.allData.bgcData;
      backgroundCheckData.candidateId = candidateDataResult.id;
      const backgroundCheckDataResult =
        await this.backgroundCheckService.createBGCData(backgroundCheckData);

      const documentationData = inputData.allData.documentationData;
      documentationData.candidateId = candidateDataResult.id;
      const documentationDataDataResult =
        await this.documentationService.createDocumentationData(
          documentationData,
        );

      const startAndEndOperationData =
        inputData.allData.startAndEndOperationData;
      startAndEndOperationData.candidateId = candidateDataResult.id;
      const startAndEndOperationDataResult =
        await this.startEndOperationsService.createStartEndOperations(
          startAndEndOperationData,
        );

      const rateRevisionData = inputData.allData.rateRevisionData;
      rateRevisionData.candidateId = candidateDataResult.id;
      const rateRevisionDataResult =
        await this.rateRevisionService.createRateRevision(rateRevisionData);

      let json = {
        clientDataResult: clientDataResult,
        clientAddressDataResult: clientAddressDataResult,
        candidateDataResult: candidateDataResult,
        candidateAddressDataResult: candidateAddressDataResult,
        vendorDataResult: vendorDataResult,
        vendorAddressDataResult: vendorAddressDataResult,
        backgroundCheckDataResult: backgroundCheckDataResult,
        documentationDataDataResult: documentationDataDataResult,
        referralDataResult: referralDataResult,
        referralAddressDataResult: referralAddressDataResult,
        startAndEndOperationDataResult: startAndEndOperationDataResult,
        rateRevisionDataResult: rateRevisionDataResult,
      };

      const result = await this.backgroundCheckService.createBGCData(
        inputData.allData.bgcData,
      );
      res.status(HttpStatus.OK).json(json);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post()
  async createCandidate(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: Candidate,
  ) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
