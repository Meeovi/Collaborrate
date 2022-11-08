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


export class dashboardsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_secret?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
privacy?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
category?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
media?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
reports?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tasks?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
projects?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tickets?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
checklists?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
visits?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
products?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
articles?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
sales?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
logo?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
published?: string;

}


export class CreatedashboardsInput extends OmitType(dashboardsInput, [] as const) {}


export class UpdatedashboardsInput extends PartialType(CreatedashboardsInput) {}

