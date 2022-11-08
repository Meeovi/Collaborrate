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


export class segmentsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
website?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
apply_to?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

}


export class CreatesegmentsInput extends OmitType(segmentsInput, [] as const) {}


export class UpdatesegmentsInput extends PartialType(CreatesegmentsInput) {}

