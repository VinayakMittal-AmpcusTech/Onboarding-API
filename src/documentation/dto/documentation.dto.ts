import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class DocumentationDTO {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Documentation ID' })
  id: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: ' Articles Or Certificate Of Incorporation',
  })
  articlesOrCertificateOFIncorporation: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'w9Orw4',
  })
  w9Orw4: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Direct Deposit Agreement',
  })
  directDepositAgreement: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Void check or email content',
  })
  voidCheckOrEmailContent: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'CIPCICICA or CIPCICU',
  })
  CIPCICICAOrCIPCICU: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Good standing document',
  })
  goodStandingDocument: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Work authorization document',
  })
  workAuthorizationDocument: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'I9 form',
  })
  I9Form: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'List A Documentation',
  })
  listADocument: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'List B documentation',
  })
  listBDocument: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'List of document',
  })
  listCDocument: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'E verify ',
  })
  E_verify: string;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'E verification date',
  })
  E_verificationDate: Date;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Emergency form',
  })
  emergencyForm: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Vaccination form',
  })
  vaccinationStatus: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'MSA',
  })
  MSA: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'SOW',
  })
  SOW: string;

  @IsString()
  @ApiProperty({
    type: Date,
    description: 'SOW validity',
  })
  SOWValidity: Date;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Certificate of Insurance OR COI',
  })
  certificateOFInsuranceOrCOI: string;

  @IsString()
  @ApiProperty({
    type: Date,
    description: 'Certification insurance',
  })
  certificationOfInsurance: Date;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'client task order or sow',
  })
  clientTaskOrderOrSOW: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Task order ',
  })
  clientTaskOrderOrSOWst: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Client task order signing',
  })
  clientTaskOrderSigning: string;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'Task order expiry date',
  })
  TaskOrderExpiryDate: Date;

  @IsDate()
  @ApiProperty({
    type: String,
    description: 'Documentation status',
  })
  documentationStatus: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Documentation remark',
  })
  documentationRemark: string;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'Document completion date',
  })
  documentationCompletionDate: Date;
  
  @IsString()
  @ApiProperty({ type: Number, description: 'Client ID' })
  candidateId: number
}
