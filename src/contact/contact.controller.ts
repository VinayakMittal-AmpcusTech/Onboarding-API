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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { ContactDetails } from './models/contact-entity';
import { ContactDTO } from './dto/contact-dto';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Get()
  async getAllContact(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) { }
    return;
  }

  @Get('/byid/:contactId')
  async getContactById(
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

  @Post('/test')
  async test(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any,
  ) {
    try {
      res.status(HttpStatus.OK).json('okay');
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post()
  async createContact(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ContactDetails,
  ) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @ApiBody({ type: ContactDTO })
  @Post('/edit-contact')
  @ApiOperation({ summary: 'update contact Data' })
  async editContactData(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ContactDTO,
  ) {
    try {
      const updatedData = await this.contactService.updateContactData(body);
      res.status(HttpStatus.OK).json(updatedData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post('/delete-contact/:id')
  @ApiOperation({ summary: 'Delete contact' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  async deleteContact(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
  ) {
    try {
      const contactData = await this.contactService.deleteContact(param?.id);
      res.status(HttpStatus.OK).json(contactData);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
