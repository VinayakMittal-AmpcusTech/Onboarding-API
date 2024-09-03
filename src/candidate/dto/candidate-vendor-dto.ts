import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
export class CandidateVendorDTO {

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({ type: Number, description: 'Candidate Vendor ID' })
  // id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Boolean, description: 'Is referral' })
  isReferral: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Vendor ID' })
  vendorId: number;
}