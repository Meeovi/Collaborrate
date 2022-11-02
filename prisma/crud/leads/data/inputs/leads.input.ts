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


export class leadsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
Prefix?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
first_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
last_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
department?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
account_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
postalcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
fax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
website?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mobile?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
job_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alt_address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alt_postalcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alt_city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alt_state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alt_country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
office_phone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
opportunity_amount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
campaign?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
lead_source?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
lead_source_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
referred_by?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_name?: string;

}


export class CreateleadsInput extends OmitType(leadsInput, [] as const) {}


export class UpdateleadsInput extends PartialType(CreateleadsInput) {}

