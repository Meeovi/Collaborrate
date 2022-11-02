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


export class checklistInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
username?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
location?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
regional_manager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
manager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
ticket?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
project?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
region?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
prod_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
trainings?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
task?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

}


export class CreatechecklistInput extends OmitType(checklistInput, [] as const) {}


export class UpdatechecklistInput extends PartialType(CreatechecklistInput) {}

