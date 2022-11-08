/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsObject} from 'class-validator';
import {IsNumber} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class upload_fileInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
alternativeText?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
caption?: string;

@ApiProperty({"required":false})@IsOptional()@IsInt()
width?: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
height?: number;

@ApiProperty({"required":false})@IsOptional()@IsObject()
formats?: object;

@ApiProperty()@IsString()
hash: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
ext?: string;

@ApiProperty()@IsString()
mime: string;

@ApiProperty()@IsNumber()
size: number;

@ApiProperty()@IsString()
url: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
previewUrl?: string;

@ApiProperty()@IsString()
provider: string;

@ApiProperty({"required":false})@IsOptional()@IsObject()
provider_metadata?: object;

@ApiProperty({"required":false})@IsOptional()@IsInt()
created_by?: number;

@ApiProperty({"required":false})@IsOptional()@IsInt()
updated_by?: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
updated_at?: Date;

}


export class Createupload_fileInput extends OmitType(upload_fileInput, [] as const) {}


export class Updateupload_fileInput extends PartialType(Createupload_fileInput) {}

