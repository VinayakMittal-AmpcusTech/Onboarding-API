import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  Post,
  UseGuards,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDemoDTO } from './dto/user-demo.dto';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getUsers(): any {
    return this.userService.findAll();
  }

  @ApiBody({ type: UpdateUserDTO })
  @ApiOperation({ summary: 'Update User' })
  @Patch()
  async updateUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: UpdateUserDTO,
  ) {
    try {
      const result = await this.userService.updateUserDetails(body);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/org-user/:orgId')
  @ApiOperation({ summary: 'Get all user by organization Id' })
  @ApiParam({
    name: 'orgId',
    required: true,
    description: 'Orgnization Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getUsersByOrgId(
    @Param() param,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.userService.getUserByOrgnizationId(param.orgId);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/can/:recId')
  @ApiOperation({ summary: 'Get all candidate by recruter ' })
  @ApiParam({
    name: 'recId',
    required: true,
    description: 'Recuiter Id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  async getCandidateByRecruiterId(
    @Param() param,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.userService.getCandidateByRecruiterId(
        param.recId,
        );
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }

  @Get('/candidate/:orgnizationId')
  @ApiOperation({ summary: 'Get all candidate by organization ' })
  @ApiParam({
    name: 'orgnizationId',
    required: true,
    description: 'orgnizationId',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  async getCandidateByOrgId(
    @Param() param,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.userService.CandidateByOrgID(
        param.orgnizationId,
        );
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    return;
  }


  @ApiBody({ type: CreateUserDTO })
  @ApiOperation({
    summary: 'Create User (Admin, Bravens tool Admin, User, Candidate  )',
  })
  @Post()
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateUserDTO,
  ) {
    try {
      const result = await this.userService.createUser(body);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  // @ApiBody({ type: CreateUserDemoDTO })
  // @ApiOperation({
  //   summary: 'Create User Demo',
  // })
  // @Post('/demo-user')
  // async createUserDemo(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Body() body: CreateUserDemoDTO,
  // ) {
  //   try {
  //     const result = await this.userService.createDemoUser(body);
  //     res.status(HttpStatus.OK).json(result);
  //   } catch (error) {
  //     res.status(HttpStatus.BAD_REQUEST).json(error);
  //   }
  // }
}
