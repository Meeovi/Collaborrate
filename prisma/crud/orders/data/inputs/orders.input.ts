/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class ordersInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
purchase_point?: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
purchase_date?: Date;

@ApiProperty()@IsString()
bill_to_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
ship_to_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
grand_total_base?: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
grand_total_purchased?: number;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
status?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
action?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
allocated_sources?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
braintree_transaction_source?: string;

@ApiProperty()@IsInt()
cust_id: number;

@ApiProperty()@IsNumber()
prod_id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quotes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
transactions?: string;

}


export class CreateordersInput extends OmitType(ordersInput, [] as const) {}


export class UpdateordersInput extends PartialType(CreateordersInput) {}

