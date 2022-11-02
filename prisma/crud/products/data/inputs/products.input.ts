/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class productsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty()@IsNumber()
sku: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
thumbnail?: string;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
price?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quantity_per_source?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
salable_quantity?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
visibility?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
status?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax_class?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
stock_status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
weight?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
size?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
format?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
height?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
short_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_keywords?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
file?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
manufacture?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
attributes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
brand?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
contract?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
cost_string?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
family?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
manufacturer_part_number?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
occassions?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
part_number?: string;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
related_product?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
tags?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
types?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
variants?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
zone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
brands?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
coupons?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
credit_memos?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
manufacturer?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mediamanager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
occassions_occassionsToproducts?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orders?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
other_products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product_attribute?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product_types?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quotes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
rating?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
returns?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax_rate?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tax_rule?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
trainings?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

}


export class CreateproductsInput extends OmitType(productsInput, [] as const) {}


export class UpdateproductsInput extends PartialType(CreateproductsInput) {}

