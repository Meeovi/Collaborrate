/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class taxesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
tax_identifier: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
postcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
rate_percent?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
taxDefault?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
taxRuleName?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
taxCategory?: string;

}


export class CreatetaxesInput extends OmitType(taxesInput, [] as const) {}


export class UpdatetaxesInput extends PartialType(CreatetaxesInput) {}

