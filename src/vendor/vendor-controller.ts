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
import { Vendor } from './models/vendor-entity';
import { VendorService } from './vendor-service';
import { VendorDTO } from './dto/vendor-dts';
import { AddressService } from 'src/address/address.service';
import { PersonService } from 'src/person/person-service';
import { ContactService } from 'src/contact/contact.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { VendorUpdateDTO } from './dto/update-vendor-dto';

@ApiTags('Vendor')
@Controller('vendor')
export class VendorController {
  constructor(
    private readonly personService: PersonService,
    private readonly vendorService: VendorService,
    private readonly addressService: AddressService,
    private readonly contactService: ContactService,
  ) { }

  @Get()
  async getAllVendor(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/byid/:vendorId')
  @ApiOperation({ summary: 'Get vendor' })
  @ApiParam({
    name: 'vendorId',
    required: true,
    description: 'vendor id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getVendorById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const vendorData = await this.vendorService.getVendorById(param.vendorId);
      res.status(HttpStatus.OK).json(vendorData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/get-all-vendors')
  async test(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any,
  ) {
    try {
      let vendorDataResult = await this.vendorService.getAllVendor();
      res.status(HttpStatus.OK).json(vendorDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('add-vendor')
  async createVendor(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: VendorDTO,
  ) {
    try {
      const vendorData = body;
      const personDataResult = await this.personService.createPerson();
      vendorData.personId = personDataResult.id;
      const vendorDataResult = await this.vendorService.createVendor(
        vendorData,
      );
      const vendorAddressDto = await this.vendorService.createAddressDto(
        vendorData,
      );
      vendorAddressDto.vendorId = vendorDataResult.id;
      const vendorAddressDataResult = await this.addressService.createAddress(
        vendorAddressDto,
      );

      const contactDetailsDto = await this.contactService.createContactDto(
        vendorData,
      );
      contactDetailsDto.addressId = vendorAddressDataResult.id;
      const contactDetailsDataResult = await this.contactService.createContact(
        contactDetailsDto,
      );

      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-vendor')
  async editVendor(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: VendorDTO,
  ) {
    try {
      const vendorAddressDataResult = await this.vendorService.updateAddress(
        body,
      );
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-vendor')
  async deleteVendor(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const vendorAddressDataResult = await this.vendorService.deleteAddress(
        body.personId,
      );
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @ApiBody({ type: VendorUpdateDTO })
  @Post('/edit-only-vendor')
  @ApiOperation({ summary: 'update vendor Data' })
  async editClientData(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: VendorUpdateDTO,
  ) {
    try {
      const updatedData = await this.vendorService.updateOnlyVendorData(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-only-vendor/:id')
  @ApiOperation({ summary: 'Delete vendor' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteOnlyVendor(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const vendorData = await this.vendorService.deleteVendor(param?.id);
      res.status(HttpStatus.OK).json(vendorData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
