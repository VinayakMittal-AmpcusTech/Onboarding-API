import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CandidateVendorEditDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate Id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  candidateVendorId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Vendor ID' })
  vendorId: number;
}
