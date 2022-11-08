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


export class providersInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_secret?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
host_uri?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
redirect_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
redirect_url_app?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
icon?: string;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
active?: string;

}


export class CreateprovidersInput extends OmitType(providersInput, [] as const) {}


export class UpdateprovidersInput extends PartialType(CreateprovidersInput) {}

