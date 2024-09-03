import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Address } from 'src/address/models/address-entity';
import { ContactDetails } from 'src/contact/models/contact-entity';
export class ReferralDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Referral ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate Id' })
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Address ID' })
  addressId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Company name' })
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Federal id' })
  federalID: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Point of contact' })
  contactPerson: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Email' })
  email: string;

  // contactNumber, faxNumber, addressId

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Contact Details' })
  contactNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Contact Details' })
  faxNumber: number;

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
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Zip code' })
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Person ID' })
  personId: number;
}
