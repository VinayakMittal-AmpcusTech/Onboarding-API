import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CandidateContractTypeDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Contract type ID' })
  contractTypeId: number;
}
