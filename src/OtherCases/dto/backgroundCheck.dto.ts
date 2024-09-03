import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BackgroundCheckDTO {
  @IsString()
  @ApiProperty({ type: Number, description: 'Background check ID' })
  id: number;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Initiated on' })
  BGCInitiatedOn: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Initiated thru' })
  BGCInitiatedThru: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Package-1' })
  BGCPackage1: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Package-2' })
  BGCPackage2: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check invoice month' })
  BGCInvoiceMonth: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Background check charges primary',
  })
  BGCCharges: string;

  @IsString()
  @ApiProperty({
    type: Number,
    description: 'Background check reference id',
  })
  BackgroundCheckId: string;
}
