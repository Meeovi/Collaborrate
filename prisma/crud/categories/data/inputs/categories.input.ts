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
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class categoriesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
thumbnail?: string;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
visibility?: string;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
status?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_keywords?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
workspaces?: string;

}


export class CreatecategoriesInput extends OmitType(categoriesInput, [] as const) {}


export class UpdatecategoriesInput extends PartialType(CreatecategoriesInput) {}

