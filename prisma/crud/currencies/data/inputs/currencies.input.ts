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


export class currenciesInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
code?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
region?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
symbol?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
useStandard?: string;

}


export class CreatecurrenciesInput extends OmitType(currenciesInput, [] as const) {}


export class UpdatecurrenciesInput extends PartialType(CreatecurrenciesInput) {}

