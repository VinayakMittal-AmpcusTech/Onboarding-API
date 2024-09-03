import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

import { UserRoles } from '../enums/user-role.enum';

export class CreateUserDemoDTO {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'first name' })
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'last name' })
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'Number of Users' })
  public numberOfUsers: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'email Id' })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'jobRole' })
  public jobRole: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'companyName' })
  public companyName: string;

  @IsEnum(UserRoles)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'User Role should be "Demo"',
  })
  role: string;
}
