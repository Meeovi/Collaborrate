/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class discountsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
excerpt?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
discount?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
published?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
special_offers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
rewards?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
coupons?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
expiration?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
articles?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
creditMemo?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
billToName?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orderNumber?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
refunded?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

}


export class CreatediscountsInput extends OmitType(discountsInput, [] as const) {}


export class UpdatediscountsInput extends PartialType(CreatediscountsInput) {}

