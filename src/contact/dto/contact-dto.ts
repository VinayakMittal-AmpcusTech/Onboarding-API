import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
import { Vendor } from 'src/vendor/models/vendor-entity';
export class ContactDTO {

    // @IsString()
    // @IsNotEmpty()
    // @ApiProperty({ type: Number, description: 'Contact ID' })
    // id: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Email ID' })
    email: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Contact number' })
    contactNumber: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Fax number' })
    faxNumber: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Address id' })
    addressId: number;
}
