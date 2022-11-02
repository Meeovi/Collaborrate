/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {IsOptional} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {IsNumber} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class shipmentsInput  {
  
@ApiProperty({"required":false})@IsOptional()@IsString()
product?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
speed_grade?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
ship_date?: Date;

@ApiProperty()@IsString()
carrier_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
transit_time?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
tracking_url?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
image?: string;

@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_id?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
client_secret?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
country?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
website?: string;

}


export class CreateshipmentsInput extends OmitType(shipmentsInput, [] as const) {}


export class UpdateshipmentsInput extends PartialType(CreateshipmentsInput) {}

