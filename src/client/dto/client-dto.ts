import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
import { Person } from 'src/person/models/person-entity';

export class ClientDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Client name' })
  clientName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'End client name' })
  endClientName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'MSP name' })
  mspName: string;

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
  @ApiProperty({ type: String, description: 'Country' })
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Person ID' })
  personId: number;
}
