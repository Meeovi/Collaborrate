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
import {IsObject} from 'class-validator';
import {IsBoolean} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class content_typeInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
text?: string;

@ApiProperty({"required":false})@IsOptional()@IsNumber()
number?: number;

@ApiProperty({"required":false})@IsOptional()@IsObject()
json?: object;

@ApiProperty({"required":false})@IsOptional()@IsString()
link?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
uid?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
date?: Date;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
time?: Date;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
timestamp?: Date;

@ApiProperty({"required":false})@IsOptional()@IsBoolean()
boolean?: boolean;

@ApiProperty({"required":false})@IsOptional()@IsString()
rich_text?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
password?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
database_name?: string;

}


export class Createcontent_typeInput extends OmitType(content_typeInput, [] as const) {}


export class Updatecontent_typeInput extends PartialType(Createcontent_typeInput) {}

