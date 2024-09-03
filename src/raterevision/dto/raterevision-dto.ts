import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RateRevisionDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Rate Revision ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate Id' })
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Gross BR' })
  grossBr: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Msp Fee In Percentage' })
  mspFeePercentage: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Msp Fee' })
  mspFee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Net Bill Rate' })
  netBillRate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Pay Rate' })
  payRate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Referral Fee' })
  refFee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Tax OH In Percentage' })
  taxOHPercentage: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Tax OH' })
  taxOH: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Opted for health benefits' })
  optedForHB: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'health benefits cost' })
  healthB: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Net Purchase' })
  netPurchase: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Margin' })
  margin: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Rate Revision reason' })
  rateRevisionReason: string;
}
