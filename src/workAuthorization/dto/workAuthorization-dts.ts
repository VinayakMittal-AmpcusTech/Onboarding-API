import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
export class WorkAuthorizationDTO {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Work Authorization ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Work Authorization' })
  workAuthorization: string;
}
