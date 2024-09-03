import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CandidateWorkAuthorizationDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Work authorization Id' })
  workAuthorizationId: number;
}
