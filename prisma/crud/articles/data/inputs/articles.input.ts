/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class articlesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
excerpt?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
categories?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
published?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
cust_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
isPublic?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meta_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tags?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

}


export class CreatearticlesInput extends OmitType(articlesInput, [] as const) {}


export class UpdatearticlesInput extends PartialType(CreatearticlesInput) {}

