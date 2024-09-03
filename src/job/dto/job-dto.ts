import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString
} from 'class-validator';
export class JobDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Job id' })
    id: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Request id' })
    requestID: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Job diva id' })
    jobDivaID: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Number, description: 'Job title' })
    jobTitle: string;

    // @IsString()
    // @IsNotEmpty()
    // @ApiProperty({ type: String, description: 'Candidate working from' })
    // workingFrom: string;
  
    // @IsString()
    // @IsNotEmpty()
    // @ApiProperty({ type: String, description: 'Work type' })
    // workType: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Job type' })
    jobType: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Resume source' })
    resumeSource: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Line of business' })
    lineOfBusiness: string
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String, description: 'Job description' })
    jobDescription: string
}
