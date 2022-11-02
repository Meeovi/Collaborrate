/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class contractsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
contract_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contract_value?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
start_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
end_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
renewal_reminder?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_signed_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
company_signed_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contract_manager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
account?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contact?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
opportunity?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contract_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_items?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
total?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
discount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
subtotal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
grand_total?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

}


export class CreatecontractsInput extends OmitType(contractsInput, [] as const) {}


export class UpdatecontractsInput extends PartialType(CreatecontractsInput) {}

