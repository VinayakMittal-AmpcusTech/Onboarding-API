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

export class CreateUserDTO {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'User first name' })
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'User middle name' })
  public middleName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'User last name' })
  public lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'User email Id' })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'username' })
  public username: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'contact' })
  public contact: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'country code for contact like "+91"',
  })
  contact_country_code: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'Profile picture' })
  profilePicture: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: String, description: 'Address in Details' })
  address: string;

  @IsEnum(UserRoles)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'User Role should be "ADMIN" OR "USER"',
  })
  role: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    type: Date,
    description: 'User birth Date"',
  })
  birthDate: Date;

  // @IsString()
  // @IsNotEmpty()
  // @IsOptional()
  // @ApiProperty({
  //   type: Number,
  //   description: 'Corresponding organization Id',
  // })
  // orgnizationId: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'recruiter_id is must when user is creating candidate',
  })
  recruiter_id: number;
}
