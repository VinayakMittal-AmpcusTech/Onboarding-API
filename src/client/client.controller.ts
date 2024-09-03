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
import { Client } from './models/client-entity';
import { ClientService } from './client.service';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ClientDTO } from './dto/client-dto';
import { AddressService } from 'src/address/address.service';
import { PersonService } from 'src/person/person-service';
import { Person } from 'src/person/models/person-entity';
import { ContactService } from 'src/contact/contact.service';
import { ClientUpdateDTO } from './dto/update-client-dto';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(
    private readonly personService: PersonService,
    private readonly clientService: ClientService,
    private readonly addressService: AddressService,
    private readonly contactService: ContactService,
  ) { }

  @Get()
  async getAllClient(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/byid/:clientId')
  async getClientById(
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

  @Get('/get-all-clients')
  async getAllClients(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any,
  ) {
    try {
      const clientDataResult = await this.clientService.getAllClient();
      res.status(HttpStatus.OK).json(clientDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/add-client')
  async createClient(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ClientDTO,
  ) {
    try {
      const clientData = body;
      const personDataResult = await this.personService.createPerson();
      clientData.personId = personDataResult.id;
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

      const contactDetailsDto = await this.contactService.createContactDto(
        clientData,
      );
      contactDetailsDto.addressId = clientAddressDataResult.id;
      const contactDetailsDataResult = await this.contactService.createContact(
        contactDetailsDto,
      );

      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/edit-client')
  async editClient(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ClientDTO,
  ) {
    try {
      const clientAddressDataResult = await this.clientService.updateAddress(
        body,
      );
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-client')
  async deleteClient(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const clientAddressDataResult = await this.clientService.deleteAddress(
        body.personId,
      );
      res.status(HttpStatus.OK).json(clientAddressDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/delete-only-client/:personId')
  @ApiOperation({ summary: 'Delete client' })
  @ApiParam({
    name: 'personId',
    required: true,
    description: 'personId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteOnlyClient(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const clientData = await this.clientService.deleteClient(param?.personId);
      res.status(HttpStatus.OK).json(clientData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/byUniqueId/:singleClientId')
  @ApiOperation({ summary: 'Get Client' })
  @ApiParam({
    name: 'singleClientId',
    required: true,
    description: 'client Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async getSingleClientById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {

    try {
      const clientData = await this.clientService.getSingleClientById(
        param.singleClientId,
      );
      res.status(HttpStatus.OK).json(clientData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @ApiBody({ type: ClientDTO })
  @Post('/edit-client')
  @ApiOperation({ summary: 'update Data' })
  async editStartEndOperations(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ClientDTO,
  ) {
    try {
      const updatedData = await this.clientService.updateClient(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @ApiBody({ type: ClientUpdateDTO })
  @Post('/edit-only-client')
  @ApiOperation({ summary: 'update client Data' })
  async editClientData(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ClientUpdateDTO,
  ) {
    try {
      const updatedData = await this.clientService.updateOnlyClientData(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }
}
