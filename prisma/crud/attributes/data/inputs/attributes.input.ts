/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class attributesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_label?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
attribute_code?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
filter_options?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
use_search?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
layered_navigation?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
search_results_layered_navigation?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
position?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
promo_rule_conditions?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
allow_html_tags_storefront?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
visible_catalog_pages_storefront?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
used_product_listing?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
used_sorting_product_listing?: boolean;

@ApiProperty()@IsNumber()
prod_id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
attribute_class?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
attribute_value?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
column_options?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
faceted_navigation?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
isPublic?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
meta_name?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product_attribute_set?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

}


export class CreateattributesInput extends OmitType(attributesInput, [] as const) {}


export class UpdateattributesInput extends PartialType(CreateattributesInput) {}

