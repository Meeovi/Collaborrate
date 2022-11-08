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


export class templatesInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
assigned_to?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
active?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
page_size?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
orientation?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
header?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
footer?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_left?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_right?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_top?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_bottom?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_header?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
margin_footer?: string;

}


export class CreatetemplatesInput extends OmitType(templatesInput, [] as const) {}


export class UpdatetemplatesInput extends PartialType(CreatetemplatesInput) {}

