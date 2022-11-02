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


export class channelsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
code?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
currency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_lang?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
include_tax?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_zone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
default_shipping?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_secret?: string;

}


export class CreatechannelsInput extends OmitType(channelsInput, [] as const) {}


export class UpdatechannelsInput extends PartialType(CreatechannelsInput) {}

