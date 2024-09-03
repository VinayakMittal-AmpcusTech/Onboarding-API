import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
export class ContractTypeDTO {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Contract type ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Contract type' })
  contractType: string;
}
