/*
-----------------------------------------------------
THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
-----------------------------------------------------
*/

import {ApiProperty} from '@nestjs/swagger';
import {IsInt} from 'class-validator';
import {IsString} from 'class-validator';
import {IsOptional} from 'class-validator';
import {IsISO8601} from 'class-validator';
import {OmitType} from '@nestjs/swagger';
import {PartialType} from '@nestjs/swagger';


export class newslettersInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
email: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_first_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
customer_last_name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
store?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
status?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
websites?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty()@IsInt()
cust_id: number;

@ApiProperty({"required":false})@IsOptional()@IsString()
customers?: string;

}


export class CreatenewslettersInput extends OmitType(newslettersInput, [] as const) {}


export class UpdatenewslettersInput extends PartialType(CreatenewslettersInput) {}

