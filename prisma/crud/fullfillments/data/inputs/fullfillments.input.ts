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


export class fullfillmentsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
shipping_zones?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
company?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
address_two?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
city?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
state?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
zipcode?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country_area?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
phone?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
pickup?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
stock?: string;

}


export class CreatefullfillmentsInput extends OmitType(fullfillmentsInput, [] as const) {}


export class UpdatefullfillmentsInput extends PartialType(CreatefullfillmentsInput) {}

