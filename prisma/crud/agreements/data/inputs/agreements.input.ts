/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsNumber} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class agreementsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
reference_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created?: Date;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
updated?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
excerpt?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
type?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
user_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shop_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
mediamanager?: string;

}


export class CreateagreementsInput extends OmitType(agreementsInput, [] as const) {}


export class UpdateagreementsInput extends PartialType(CreateagreementsInput) {}

