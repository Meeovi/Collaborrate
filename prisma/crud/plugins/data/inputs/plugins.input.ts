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
import {IsBoolean} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class pluginsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
github_link?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
logo?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
screenshots?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
last_updated?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
publisher_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
agree_terms?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
publisher_email?: string;

}


export class CreatepluginsInput extends OmitType(pluginsInput, [] as const) {}


export class UpdatepluginsInput extends PartialType(CreatepluginsInput) {}

