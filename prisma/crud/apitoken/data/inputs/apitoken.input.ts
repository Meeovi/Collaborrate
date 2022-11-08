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


export class apitokenInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
token_type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty()@IsNumber()
token: BigInt;

}


export class CreateapitokenInput extends OmitType(apitokenInput, [] as const) {}


export class UpdateapitokenInput extends PartialType(CreateapitokenInput) {}

