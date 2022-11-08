/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class invoicesInput  {
  
@ApiProperty()@IsInt()
invoice: number;

@ApiProperty()@IsNumber()
order_number: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
invoice_date?: Date;

@ApiProperty()@IsString()
bill_to_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
grand_total_base?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
grand_total_purchased?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_group?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
payment_method?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_information?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
subtotal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_and_handling?: string;

@ApiProperty()@IsNumber()
id: BigInt;

}


export class CreateinvoicesInput extends OmitType(invoicesInput, [] as const) {}


export class UpdateinvoicesInput extends PartialType(CreateinvoicesInput) {}

