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


export class rolesInput  {
  
@ApiProperty()@IsInt()
id: number;

@ApiProperty()@IsString()
role_name: string;

@ApiProperty({"required":false})@IsOptional()@IsString()
content?: string;

@ApiProperty({"required":false})@IsOptional()@IsISO8601()
created_at?: Date;

}


export class CreaterolesInput extends OmitType(rolesInput, [] as const) {}


export class UpdaterolesInput extends PartialType(CreaterolesInput) {}

