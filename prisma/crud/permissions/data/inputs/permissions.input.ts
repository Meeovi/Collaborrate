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


export class permissionsInput  {
  
@ApiProperty()@IsNumber()
id: BigInt;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

@ApiProperty({"required":false})@IsOptional()@IsString()
name?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
create?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
delete?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
read?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
role?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
update?: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
users?: string;

}


export class CreatepermissionsInput extends OmitType(permissionsInput, [] as const) {}


export class UpdatepermissionsInput extends PartialType(CreatepermissionsInput) {}

