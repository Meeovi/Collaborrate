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


export class visitsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
location?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
username?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
reason?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
emergency?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
start_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
end_date?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
task?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
meeting?: string;

}


export class CreatevisitsInput extends OmitType(visitsInput, [] as const) {}


export class UpdatevisitsInput extends PartialType(CreatevisitsInput) {}

