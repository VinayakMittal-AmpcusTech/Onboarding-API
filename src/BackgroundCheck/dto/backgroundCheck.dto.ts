import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BackgroundCheckDTO {
  @IsString()
  @ApiProperty({ type: Number, description: 'Background check ID' })
  id: number;

  @IsString()
  @ApiProperty({ type: String, description: 'Case ID-1' })
  caseID1: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Initiated on' })
  BGCInitiatedOn: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Primary Background check initiated',
  })
  primaryBGCInitiatedThru: string;

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
  BGCChargesPrimary: string;

  // --------------------------

  @IsString()
  @ApiProperty({ type: Boolean, description: 'Secondary' })
  secondary: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check case ID - 2' })
  caseID2: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check Initiated on' })
  secondaryBGCInitiatedOn: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check initiate thru' })
  secondaryBGCInitiatedThru: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Secondary background check-1 ' })
  secondaryBGCPackage1: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Secondary background check-2' })
  secondaryBGCPackage2: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check invoice month' })
  secondaryBGCInvoiceMonth: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background charges secondary' })
  secondaryBGCCharges: string;

  // ---------------------------------

  @IsString()
  @ApiProperty({ type: Boolean, description: 'Tertiary' })
  tertiary: boolean;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check ID-3' })
  caseID3: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Background check Initiate on - 3',
  })
  tertiaryBGCInitiatedOn: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Third background check initiate thru',
  })
  tertiaryBGCInitiatedThru: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Secondary2 Background check-1' })
  tertiaryBGCPackage1: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Secondary2 Background check-2' })
  tertiaryBGCPackage2: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Background check Invoice month 3 ',
  })
  tertiaryBGCInvoiceMonth: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check tertiary ID' })
  tertiaryBGCCharges: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check status' })
  BGCStatus: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check completed' })
  BGCCompletedOn: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Background check affidavit status',
  })
  BGCAffidavitStatus: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check submitted on' })
  BGCAffidavitOn: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check report' })
  BGCReportStatus: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check adjust status' })
  BGCAdjuStatus: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Background check support documents',
  })
  adjuSupportingDocs: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Date of adjudication' })
  dateOfAdjudication: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check final status' })
  finalBGCReport: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Background check ID' })
  BGCRemark: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Client ID' })
  candidateId: number
}
