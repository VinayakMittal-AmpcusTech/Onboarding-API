import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'username or email address' })
  public username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'password' })
  public password: string;
}
