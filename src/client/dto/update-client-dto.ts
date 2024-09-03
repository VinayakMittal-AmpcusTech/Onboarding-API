import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Person } from 'src/person/models/person-entity';

export class ClientUpdateDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Client ID' })
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
}
