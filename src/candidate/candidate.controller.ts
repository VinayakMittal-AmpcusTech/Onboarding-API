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
import { CandidateVendorDTO } from './dto/candidate-vendor-dto';
import { PersonService } from 'src/person/person-service';
import { ContactService } from 'src/contact/contact.service';
import { CandidateDTO } from './dto/candidate-dto';
import { RateRevisionDTO } from 'src/raterevision/dto/raterevision-dto';
import { StartEndOperationsDTO } from 'src/startendoperations/dto/startendoperations-dto';
import { CandidateClientDTO } from './dto/candidate-client-dto';
import { CandidateJobDTO } from './dto/candidate-job-dto';
import { CandidateVendorEditDTO } from './dto/candidate-vendor-edit-dto';
import { ContractTypeService } from 'src/contracttype/contractType-service';
import { CandidateWorkAuthorizationDTO } from './dto/candidate-work-authorization';
import { CandidateContractTypeDTO } from './dto/candidate-contract-type-dto';

@ApiTags('Candidate')
@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly addressService: AddressService,
    private readonly contactService: ContactService,
    private readonly candidateService: CandidateService,
    private readonly candidateVendorService: CandidateVendorService,
    private readonly personService: PersonService,
    private readonly backgroundCheckService: BackGround_Check_service,
    private readonly rateRevisionService: RateRevisionService,
    private readonly startEndOperationsService: StartEndOperationsService,
    private readonly documentationService: DocumentationService,
    private readonly workAuthorizationService: WorkAuthorizationService,
    private readonly contractTypeService: ContractTypeService,
    private readonly referralService: ReferralService,
  ) { }

  @Get('/get-all-candidate')
  async getAllCandidate(@Res() res: Response) {
    try {
      const candidateData = await this.candidateService.getAllCandidate();
      res.status(HttpStatus.OK).json(candidateData);
    } catch (error) { }
    return;
  }

  // @Get('/getCandidate_exam_details/:id')
  // @ApiOperation({ summary: 'Get Exam tracker' })
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async getUpdateTrackingInfo(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Param() param,
  // ) {
  //   try {
  //     const result = await this.examService.getExamTrackerDetails(param.id);
  //     res.status(HttpStatus.OK).json(result);
  //   } catch (error) {
  //     console.log('Error Create single question', error);
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  // }

  @Get('/get-candidate/:candidateId')
  @ApiOperation({ summary: 'Get candidate' })
  @ApiParam({
    name: 'candidateId',
    required: true,
    description: 'candidate id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getCandidateById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const candidateData = await this.candidateService.getCandidateById(
        param.candidateId,
      );
      const workAuthorizationData: any =
        await this.workAuthorizationService.getWorkAuthorizationById(
          candidateData?.candidateId?.workAuthorizationId,
        );
      const contractTypeData: any =
        await this.contractTypeService.getContractTypeById(
          candidateData?.candidateId?.contractTypeId,
        );
      res.status(HttpStatus.OK).json({
        candidateData: candidateData,
        workAuthorizationData: workAuthorizationData,
        contractTypeData: contractTypeData,
      });
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
      const personDataResult = await this.personService.createPerson();
      const clientData = inputData.allData.clientData;
      const vendorData = inputData.allData.vendorData;
      const referralData = inputData.allData.referralData;
      const jobData = inputData.allData.jobData;

      // const workAuthorizationData = inputData.allData.candidateData;

      const candidateData = inputData.allData.candidateData;
      candidateData.clientId = clientData.id;
      candidateData.jobId = jobData.id;
      candidateData.personId = personDataResult.id;
      candidateData.contractTypeId = clientData.contractTypeId;
      candidateData.workingFrom = jobData.workingFrom;
      candidateData.workType = jobData.workType;
      candidateData.skillSet = jobData.skillSet;
      candidateData.resumeSource = jobData.resumeSource;


      const workAuthorizationResult =
        await this.workAuthorizationService.getAllWorkAuthorization();

      for (let i = 0; i < workAuthorizationResult.length; i++) {
        if (
          workAuthorizationResult[i].workAuthorization.toString() ===
          candidateData?.workAuthorization.toString()
        ) {
          candidateData.workAuthorizationId = workAuthorizationResult[i].id;
        }
      }

      const contractTypeResult =
        await this.contractTypeService.getAllContractType();

      for (let i = 0; i < contractTypeResult.length; i++) {
        if (
          contractTypeResult[i].contractType.toString() ===
          clientData?.contractType.toString()
        ) {
          candidateData.contractTypeId = contractTypeResult[i].id;
        }
      }

      const candidateDataResult = await this.candidateService.createCandidate(
        candidateData,
      );

      referralData.candidateId = candidateDataResult?.id;


      let referralDataResult = {};

      if (candidateData?.referralCase) {
        referralDataResult = await this.referralService.createReferral(
          referralData,
        );
      }


      const candidateVendorData = {
        candidateId: candidateDataResult.id,
        vendorId: vendorData.id,
        isReferral: false,
      };
      const candidateVendorDataResult =
        await this.candidateVendorService.createCandidateVendor(
          candidateVendorData,
        );

      // const candidateReferralData = {
      //   candidateId: candidateDataResult.id,
      //   vendorId: referralData.id,
      //   isReferral: true,
      // };
      // const candidateReferralDataResult =
      //   await this.candidateVendorService.createCandidateVendor(
      //     candidateReferralData,
      //   );

      // candidateData.workAuthorizationId = workAuthorizationDataResult.id
      const candidateAddressDto = await this.candidateService.createAddressDto(
        candidateData,
      );

      // candidateAddressDto.candidateId = candidateDataResult.id;
      // candidateAddressDto.clientId = null;
      const candidateAddressDataResult =
        await this.addressService.createAddress(candidateAddressDto);

      if (candidateData?.referralCase) {

        const referralAddressDto = await this.referralService.createAddressDto(
          referralData
        )

        const referralAddressDataResult =
          await this.addressService.createAddress(referralAddressDto);
      }
      const candidateContactDetailDto = {
        email: candidateData.email,
        contactNumber: candidateData.contactNumber,
        faxNumber: candidateData.faxNumber,
        addressId: candidateAddressDataResult.id,
      };
      const candidateContactDataResult =
        await this.contactService.createContact(candidateContactDetailDto);

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
        clientDataResult: clientData,
        // clientAddressDataResult: clientAddressData,
        candidateDataResult: candidateDataResult,
        candidateAddressDataResult: candidateAddressDataResult,
        vendorDataResult: candidateVendorDataResult,
        // vendorAddressDataResult: vendorAddressData,
        backgroundCheckDataResult: backgroundCheckDataResult,
        documentationDataDataResult: documentationDataDataResult,
        // referralDataResult: candidateReferralDataResult,
        // referralAddressDataResult: referralAddressDataResult,
        startAndEndOperationDataResult: startAndEndOperationDataResult,
        rateRevisionDataResult: rateRevisionDataResult,
        ...(candidateData?.referralCase && {
          referralDataResult: referralDataResult,
        }),
      };

      // const result = await this.backgroundCheckService.createBGCData(inputData.allData.bgcData)
      res.status(HttpStatus.OK).json(json);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/edit-candidate')
  async editJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateDTO,
  ) {
    try {
      const contractTypeResult = await this.candidateService.updateCandidate(
        body,
      );

      res.status(HttpStatus.OK).json(contractTypeResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-candidate/:id')
  @ApiOperation({ summary: 'Delete candidate by id' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteCandidateById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const deleteResult = await this.candidateService.deleteCandidate(
        param.id,
      );
      res.status(HttpStatus.OK).json(deleteResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/importantData/:singleCandidateId')
  @ApiOperation({ summary: 'Get All Data' })
  @ApiParam({
    name: 'singleCandidateId',
    required: true,
    description: 'singleCandidateId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getImportantDataById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const AllData =
        await this.candidateService.getAllImportantDetailsOfCandidate(
          param.singleCandidateId,
        );
      res.status(HttpStatus.OK).json(AllData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/edit-candidate-client')
  @ApiBody({ type: CandidateClientDTO })
  @ApiOperation({ summary: 'update Candidate Data' })
  async editCandidateClient(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateClientDTO,
  ) {
    try {
      const clientDataResult =
        await this.candidateService.updateCandidateClient(body);
      res.status(HttpStatus.OK).json(clientDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-candidate-job')
  @ApiBody({ type: CandidateJobDTO })
  @ApiOperation({ summary: 'update Candidate Job Data' })
  async editCandidateJob(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateJobDTO,
  ) {
    try {
      const clientDataResult = await this.candidateService.updateCandidateJob(
        body,
      );
      res.status(HttpStatus.OK).json(clientDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-candidate-vendor')
  @ApiBody({ type: CandidateVendorEditDTO })
  @ApiOperation({ summary: 'update Candidate Vendor Data' })
  async editCandidateVendor(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateVendorEditDTO,
  ) {
    try {
      const vendorDataResult =
        await this.candidateService.updateCandidateVendor(body);

      res.status(HttpStatus.OK).json(vendorDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-candidate-work-authorization')
  @ApiBody({ type: CandidateWorkAuthorizationDTO })
  @ApiOperation({ summary: 'update Candidate Data' })
  async editCandidateWorkAuthorization(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateWorkAuthorizationDTO,
  ) {
    try {
      const workAuthorizationDataResult =
        await this.candidateService.updateCandidateWorkAuthorization(body);
      res.status(HttpStatus.OK).json(workAuthorizationDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-candidate-contract-type')
  @ApiBody({ type: CandidateContractTypeDTO })
  @ApiOperation({ summary: 'update Candidate Data' })
  async editCandidateContractType(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CandidateContractTypeDTO,
  ) {
    try {
      const contractTypeDataResult =
        await this.candidateService.updateCandidateContractType(body);
      res.status(HttpStatus.OK).json(contractTypeDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  // @Get('/candidate/documentation/:singleCandidateId')
  // @ApiOperation({ summary: 'Get All Data' })
  // @ApiParam({
  //   name: 'candidate-documentation',
  //   required: true,
  //   description: 'candidate-documentation',
  //   schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  // })
  // async getImportantDataById(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Param() param,
  // ) {
  //   try {
  //     const AllData =
  //       await this.candidateService.getAllImportantDetailsOfCandidate(
  //         param.singleCandidateId,
  //       );
  //     console.log('AllData: ', AllData);
  //     res.status(HttpStatus.OK).json(AllData);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }

  // @ApiBody({ type: RateRevisionDTO })
  // @Post('/edit-rateRevision')
  // @ApiOperation({ summary: 'update Data' })
  // // @ApiParam({
  // //   name: 'singleCandidateId',
  // //   required: true,
  // //   description: 'singleCandidateId',
  // //   schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  // // })
  // async editCandidateRateRevision(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: RateRevisionDTO,
  // ) {
  //   try {
  //     const updatedData = await this.rateRevisionService.updateRateRevision(
  //       body,
  //     );
  //     res.status(HttpStatus.OK).json(updatedData);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }

  // @ApiBody({ type: StartEndOperationsDTO })
  // @Post('/edit-startEndOperations')
  // @ApiOperation({ summary: 'update Data' })
  // async editStartEndOperations(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: StartEndOperationsDTO,
  // ) {
  //   try {
  //     const updatedData =
  //       await this.startEndOperationsService.updateStartEndOperations(body);
  //     res.status(HttpStatus.OK).json(updatedData);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }
}
