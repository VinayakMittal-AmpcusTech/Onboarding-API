import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class StartEndOperationsDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Start End Operations ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate Id' })
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Joining Status' })
  joiningStatus: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Joining Type' })
  joiningType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Joining Status Remark' })
  joiningStatusRemark: string;

  @IsString()
  @ApiProperty({ type: String, description: 'Recruiter Id' })
  recruiter: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Team Lead' })
  teamLead: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'CRM' })
  crm: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Team Manager' })
  teamManager: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Senior Manager' })
  seniorManager: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Associate Manager' })
  assoDirector: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Center Head' })
  centerHead: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Onsite Account Director' })
  onsiteAccDirector: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Onboarding Coordinator' })
  onboCoordinator: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Onboarding Coordinator' })
  endDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Exit Clearance' })
  exitClearance: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'End Reason' })
  endReason: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'End Remarks' })
  endRemarks: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Bill Gross Rate' })
  grossBr: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'MSP Fee In Percentage' })
  mspFeePercentage: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'MSP Fee' })
  mspFee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Pay rate' })
  payRate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Referral Fee' })
  refFee: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Tax OH percentage' })
  taxOHPercentage: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Tax OH' })
  taxOH: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Health benefits opted or not' })
  hBenefitesOpted: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Health Benefits cost' })
  hBenefitesCost: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Net Bill rate' })
  netBillRate: string;

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
  @ApiProperty({ type: String, description: 'Full Time Salary offered' })
  fullTimeSalaryOffered: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Job Level' })
  jobLevel: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'FF Invoice status' })
  ffInvoiceStatus: string;
}
