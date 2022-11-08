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


export class opportunitiesInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
amount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
sales_stage?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
probability?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
next_step?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
assigned_to?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
lead_source?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
campaign?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
account_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
expected_close_date?: string;

}


export class CreateopportunitiesInput extends OmitType(opportunitiesInput, [] as const) {}


export class UpdateopportunitiesInput extends PartialType(CreateopportunitiesInput) {}

