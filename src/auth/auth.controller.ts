import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  Post,
  UseGuards,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login-dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }

  @ApiBody({ type: LoginDTO })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: LoginDTO,
  ) {
    try {
      if (!req.user) {
        throw {
          success: false,
          message: 'User not found',
          status: HttpStatus.BAD_REQUEST,
        };
      }
      const result = await this.authService.login(req.user);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
