import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
import { Address } from 'src/address/models/address-entity';
export class PersonDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Person id' })
    id: number;
}
