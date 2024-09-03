import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';
export class AddressDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Address ID' })
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Line 1' })
    line1: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Line 2' })
    line2: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'City' })
    city: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'State' })
    state: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Pincode' })
    zipCode: string;

    @IsString()
    // @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Country' })
    country: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Candidate ID' })
    candidateId: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Client ID' })
    clientId: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Referral ID' })
    referralId: number
}
