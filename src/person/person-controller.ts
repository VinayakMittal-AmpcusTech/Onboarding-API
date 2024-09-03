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
import { Person } from './models/person-entity';
import { PersonService } from './person-service';
import { PersonDTO } from './dto/person-dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Get()
  async getAllPerson(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json();
    } catch (error) {
    }
    return;
  }

  @Get('/byid/:personId')
  async getPersonById(
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

  @Get('/get-all-persons')
  async test(
    @Req() req: Request,
    @Res() res: Response,
    @Body() inputData: any) {
    try {
      const personDataResult = await this.personService.getAllPerson([]);
      res.status(HttpStatus.OK).json(personDataResult);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Post("/add-person")
  async createPerson(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: PersonDTO,
  ) {
    try {
      // const personDataResult = await this.personService.createPerson();
      res.status(HttpStatus.OK).json("okay");
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}