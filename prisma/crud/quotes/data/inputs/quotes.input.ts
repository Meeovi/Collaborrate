/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class quotesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
grand_total?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
valid_until?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quote_stage?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty()@IsInt()
cust_id: number;

@ApiProperty()@IsNumber()
prod_id: BigInt;

@ApiProperty()@IsInt()
order_id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
account?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
approval_issues?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
approval_status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
assigned_to?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_postal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billing_street?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contact?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
discount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invoice_status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_discount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_group_total?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_subtotal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
line_item_total?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
payment_terms?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_postal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_street?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
subtotal?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
total?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers_customersToquotes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orders?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products_productsToquotes?: string;

}


export class CreatequotesInput extends OmitType(quotesInput, [] as const) {}


export class UpdatequotesInput extends PartialType(CreatequotesInput) {}

