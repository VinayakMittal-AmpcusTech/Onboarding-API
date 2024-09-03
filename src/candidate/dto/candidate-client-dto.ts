import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CandidateClientDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Client ID' })
  clientId: number;

  //   @IsString()
  //   @IsNotEmpty()
  //   @ApiProperty({ type: String, description: 'Client name' })
  //   clientName: string;

  //   @IsString()
  //   @IsNotEmpty()
  //   @ApiProperty({ type: String, description: 'Candidate ID' })
  //   contractType: string;
}
