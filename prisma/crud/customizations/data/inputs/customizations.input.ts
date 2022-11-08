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
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class customizationsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
site_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
nav_link?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
notification?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
banner?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
footer_link?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
announcement?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
email?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
site_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
allow_signup?: string;

}


export class CreatecustomizationsInput extends OmitType(customizationsInput, [] as const) {}


export class UpdatecustomizationsInput extends PartialType(CreatecustomizationsInput) {}

