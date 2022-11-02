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


export class webhooksInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty()@IsString()
name: string;

@ApiProperty()@IsString()
url: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
headers?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
create?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
retrieve?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
update?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
delete?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
publish?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
unpublish?: string;

}


export class CreatewebhooksInput extends OmitType(webhooksInput, [] as const) {}


export class UpdatewebhooksInput extends PartialType(CreatewebhooksInput) {}

