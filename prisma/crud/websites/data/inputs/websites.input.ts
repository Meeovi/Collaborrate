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


export class websitesInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shop?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
store?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
category?: string;

@ApiProperty()@IsString()
themes: string;

}


export class CreatewebsitesInput extends OmitType(websitesInput, [] as const) {}


export class UpdatewebsitesInput extends PartialType(CreatewebsitesInput) {}

