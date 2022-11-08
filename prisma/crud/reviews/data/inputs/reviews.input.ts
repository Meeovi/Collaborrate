/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class reviewsInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
first_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
last_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty()@IsInt()
shop_id: number;

@ApiProperty()@IsInt()
comment_id: number;

}


export class CreatereviewsInput extends OmitType(reviewsInput, [] as const) {}


export class UpdatereviewsInput extends PartialType(CreatereviewsInput) {}

