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
import { Address } from './models/address-entity';
import { AddressService } from './address.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAllCamera(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) {}
    return;
  }

    @Get('/byid/:addressId')
    async getAddressByExamId(
      @Req() req: Request,
      @Res() res: Response,
      @Param() param) {
      try {
        res.status(HttpStatus.OK).json();
      } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(error);
      }
      return;
    }
  
    @Post()
    async createAddress(
      @Req() req: Request,
      @Res() res: Response,
      @Body() body: Address,
    ) {
      try {
        res.status(HttpStatus.OK).json();
      } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    }
  }