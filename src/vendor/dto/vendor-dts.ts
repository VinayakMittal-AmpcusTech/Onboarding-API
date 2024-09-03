import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';

export class VendorDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Vendor ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Company name' })
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Federal id' })
  federalID: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Point of contact' })
  contactPerson: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Contact number' })
  contactNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Fax number' })
  faxNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Address ID' })
  addressId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Name of sign authority' })
  signAuthority: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Designation of sign authority' })
  signAuthorityDesignation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'State of incorporation' })
  stateOfIncorporation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Line 1' })
  line1: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Line 2' })
  line2: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'City' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'State' })
  state: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Zip code' })
  zipCode: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Zip code' })
  country: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Person ID' })
  personId: number;
}
