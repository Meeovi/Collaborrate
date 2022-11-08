/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class returnsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
validity?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
return_prefix?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shippingNumber?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shippingDescription?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
liquidationReason?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
weight?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
height?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
howShipped?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
location?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipTo?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
case_id?: string;

}


export class CreatereturnsInput extends OmitType(returnsInput, [] as const) {}


export class UpdatereturnsInput extends PartialType(CreatereturnsInput) {}

