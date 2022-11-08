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


export class vendorsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
website?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
articles?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
comments?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
coupons?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
polls?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
quotes?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
reviews?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
gift_certificates?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
rating?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tags?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
invoices?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
reports?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
reward_points?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
special_discounts?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
statistics?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
stocks?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
physical_store?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

}


export class CreatevendorsInput extends OmitType(vendorsInput, [] as const) {}


export class UpdatevendorsInput extends PartialType(CreatevendorsInput) {}

