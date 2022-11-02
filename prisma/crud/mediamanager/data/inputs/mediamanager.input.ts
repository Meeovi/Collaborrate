/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsString} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class mediamanagerInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
keywords?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tags?: string;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
brands?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
expiration_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
copyright?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
dimensions?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
author?: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
content_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
versions?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
watermark_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
watermark_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
watermark_media?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
agreements?: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
albums?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
comment?: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspace?: string;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
task_name?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
task_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
task_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
members?: number;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
products?: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
agreements_agreementsTomediamanager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
brands_brandsTomediamanager?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
comments?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products_mediamanagerToproducts?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tasks?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

}


export class CreatemediamanagerInput extends OmitType(mediamanagerInput, [] as const) {}


export class UpdatemediamanagerInput extends PartialType(CreatemediamanagerInput) {}

