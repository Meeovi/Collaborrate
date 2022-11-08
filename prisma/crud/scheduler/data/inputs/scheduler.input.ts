/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class schedulerInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
end_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
level?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
login?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
notes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
start_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
whid?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
label?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
public?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
permission?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

}


export class CreateschedulerInput extends OmitType(schedulerInput, [] as const) {}


export class UpdateschedulerInput extends PartialType(CreateschedulerInput) {}

