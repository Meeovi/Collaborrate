/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class statesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
description?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
trainings?: string;

}


export class CreatestatesInput extends OmitType(statesInput, [] as const) {}


export class UpdatestatesInput extends PartialType(CreatestatesInput) {}

