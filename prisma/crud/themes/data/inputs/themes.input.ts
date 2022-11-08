/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class themesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
title?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
parent_theme?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
theme_path?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
action?: string;

@ApiProperty()@IsNumber()
website_id: BigInt;

@ApiProperty()@IsString()
websites: string;

}


export class CreatethemesInput extends OmitType(themesInput, [] as const) {}


export class UpdatethemesInput extends PartialType(CreatethemesInput) {}

