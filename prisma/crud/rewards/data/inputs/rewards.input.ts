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
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class rewardsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
slug?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
level?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

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

}


export class CreaterewardsInput extends OmitType(rewardsInput, [] as const) {}


export class UpdaterewardsInput extends PartialType(CreaterewardsInput) {}

