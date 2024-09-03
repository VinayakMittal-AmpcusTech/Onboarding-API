import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class VendorUpdateDTO {
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

}
