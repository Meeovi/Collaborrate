/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class pagesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
enable_page?: boolean;

@ApiProperty()@IsString()
title: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
url_key?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_keywords?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

}


export class CreatepagesInput extends OmitType(pagesInput, [] as const) {}


export class UpdatepagesInput extends PartialType(CreatepagesInput) {}

