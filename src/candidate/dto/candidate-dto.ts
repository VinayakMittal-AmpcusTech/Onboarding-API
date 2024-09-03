import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { BackgroundCheckDTO } from 'src/BackgroundCheck/dto/backgroundCheck.dto';
import { DocumentationDTO } from 'src/documentation/dto/documentation.dto';
import { JobDTO } from 'src/job/dto/job-dto';
import { RateRevisionDTO } from 'src/raterevision/dto/raterevision-dto';
import { ReferralDTO } from 'src/referral/dto/referral-dts';
import { StartEndOperationsDTO } from 'src/startendoperations/dto/startendoperations-dto';
import { VendorDTO } from 'src/vendor/dto/vendor-dts';
export class CandidateDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Candidate ID' })
  id: number;

  @ApiProperty({ type: Boolean, description: 'First name' })
  referralCase: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'First name' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Middle name' })
  middleName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Last name' })
  lastName: string;

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
  @ApiProperty({ type: String, description: 'Zip code' })
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Country' })
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Contact number' })
  contactNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Work Authorization ID' })
  workAuthorizationId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Date, description: 'Work Authorization Expiry Date' })
  workAuthorizationExpiryDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Working from' })
  workingFrom: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Work type' })
  workType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Resume source' })
  resumeSource: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Skill set' })
  skillSet: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Client ID' })
  clientId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Person ID' })
  personId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Contract type ID' })
  contractTypeId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Vendor ID' })
  vendorId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: VendorDTO, description: 'Vendor object' })
  vendorObject: VendorDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Referral ID' })
  referralId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: ReferralDTO, description: 'Referral object' })
  referralObject: ReferralDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Job ID' })
  jobId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: JobDTO, description: 'Job object' })
  jobObject: JobDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Background check ID' })
  backgroundCheckId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: BackgroundCheckDTO,
    description: 'Background check object',
  })
  backgroundCheckObject: BackgroundCheckDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Documentation ID' })
  documentationId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: DocumentationDTO, description: 'Documentation object' })
  documentationObject: DocumentationDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Start end operation ID' })
  startEndOperationId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: StartEndOperationsDTO,
    description: 'Start end operation ID',
  })
  startEndOperationObject: StartEndOperationsDTO;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: Number, description: 'Rate revision ID' })
  rateRevisionId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: RateRevisionDTO, description: 'Rate revision ID' })
  rateRevisionObject: RateRevisionDTO;
}
