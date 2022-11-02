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


export class collectionsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_keywords?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

}


export class CreatecollectionsInput extends OmitType(collectionsInput, [] as const) {}


export class UpdatecollectionsInput extends PartialType(CreatecollectionsInput) {}

