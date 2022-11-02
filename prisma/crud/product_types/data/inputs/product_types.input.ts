/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class product_typesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
type_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
taxes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
isShippable?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
filter_options?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product_type?: string;

@ApiProperty()@IsNumber()
prod_id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

}


export class Createproduct_typesInput extends OmitType(product_typesInput, [] as const) {}


export class Updateproduct_typesInput extends PartialType(Createproduct_typesInput) {}

