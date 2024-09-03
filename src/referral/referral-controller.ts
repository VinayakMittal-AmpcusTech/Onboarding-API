/* eslint-disable prettier/prettier */
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
import { Referral } from './models/referral-entity';
import { ReferralService } from './referral-service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ReferralDTO } from './dto/referral-dts';
import { PersonService } from 'src/person/person-service';
import { AddressService } from 'src/address/address.service';
import { ContactService } from 'src/contact/contact.service';
import { ReferralUpdateDTO } from './dto/update-referral-dto';

@ApiTags('Referral')
@Controller('referral')
export class ReferralController {
  constructor(
    private readonly referralService: ReferralService,
    private readonly personService: PersonService,
    private readonly addressService: AddressService,
    private readonly contactService: ContactService,
  ) { }

  // @Get()
  // async getAllReferral(@Res() res: Response) {
  //   try {
  //     res.status(HttpStatus.OK).json();
  //   } catch (error) {}
  //   return;
  // }

  // @Get('/byid/:referralId')
  // async getReferralById(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Param() param,
  // ) {
  //   try {
  //     res.status(HttpStatus.OK).json();
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }

  // @Post('/test')
  // async test(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() inputData: any,
  // ) {
  //   try {
  //     res.status(HttpStatus.OK).json('okay');
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }

  // @Post()
  // async createReferral(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: Referral,
  // ) {
  //   try {
  //     res.status(HttpStatus.OK).json();
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  // }

  @Post('add-referral')
  async createReferral(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ReferralDTO,
  ) {
    try {
      const referralData = body;
      const personDataResult = await this.personService.createPerson();
      referralData.personId = personDataResult.id;
      const referralDataResult = await this.referralService.createReferral(
        referralData,
      );
      const referralAddressDto = await this.referralService.createAddressDto(
        referralData,
      );
      referralAddressDto.referralId = referralDataResult.id;
      const referralAddressDataResult = await this.addressService.createAddress(
        referralAddressDto,
      );

      const contactDetailsDto = await this.contactService.createContactDto(
        referralData,
      );
      contactDetailsDto.addressId = referralAddressDataResult.id;
      const contactDetailsDataResult = await this.contactService.createContact(
        contactDetailsDto,
      );

      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/byid/:referralId')
  @ApiOperation({ summary: 'Get referral' })
  @ApiParam({
    name: 'referralId',
    required: true,
    description: 'referral id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getReferralById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const referralData = await this.referralService.getReferralNyCandidateId(
        param.referralId,
      );
      res.status(HttpStatus.OK).json(referralData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/get-all-referrals')
  @ApiOperation({ summary: 'Get all referrals' })
  async test(@Req() req: Request, @Res() res: Response) {
    try {
      let vendorDataResult = await this.referralService.getAllReferral();
      res.status(HttpStatus.OK).json(vendorDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    // return;
  }

  @ApiBody({ type: ReferralUpdateDTO })
  @Post('/edit-referral')
  @ApiOperation({ summary: 'update Data' })
  async editCandidateReferral(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ReferralUpdateDTO,
  ) {
    try {
      const updatedData = await this.referralService.updateReferral(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  // @Get('/byid/:candidateId')
  // @ApiOperation({ summary: 'Get referral by candidateId' })
  // @ApiParam({
  //   name: 'candidateId',
  //   required: true,
  //   description: 'candidate id',
  //   schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  // })
  // async getReferralByCandidateId(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Param() param,
  // ) {
  //   console.log('param: ', param);

  //   try {
  //     const referralData = await this.referralService.getReferralNyCandidateId(
  //       param.referralId,
  //     );
  //     console.log('vendorData: ', referralData);
  //     res.status(HttpStatus.OK).json(referralData);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  //   return;
  // }
}
