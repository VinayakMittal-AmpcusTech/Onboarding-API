import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'User Id',
  })
  id: number;
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

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    type: Date,
    description: 'User birth Date"',
  })
  birthDate: Date;
}
