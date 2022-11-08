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


export class accountsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
website?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
office_phone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
fax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
email?: string;

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
assigned_to?: string;

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
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
industry?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
employees?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
annual_revenue?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
member_of?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
campaign?: string;

}


export class CreateaccountsInput extends OmitType(accountsInput, [] as const) {}


export class UpdateaccountsInput extends PartialType(CreateaccountsInput) {}

