import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { validateHash } from './auth.utils';
import { LoginDTO } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.userService.findOne(username);
      if (user && validateHash(pass, user.password) && user.isActive) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async login(user: any) {
    const tokens = await this.jwtService.signAsync(user);
    return {
      access_token: tokens,
      user: Object.assign({}, user),
    };
  }
}
